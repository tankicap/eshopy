import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  id?: number;
  name: string;
  rating: number;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  review: Review = { name: '', rating: 0 };
  reviews: Review[] = [];
  stars: number[] = [0, 1, 2, 3, 4]; // 5 stars

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  addReview(): void {
    if (this.review.name && this.review.rating) {
      console.log(this.review); // Проверете ги податоците
      this.reviewService.addReview(this.review).subscribe((newReview: Review) => {
        this.reviews.push(newReview);
        this.review = { name: '', rating: 0 }; // Испразни ја формата
        console.log('Review added:', newReview); // Проверете дали новата рецензија е додадена
      });
    }
  }
  

  loadReviews(): void {
    this.reviewService.getReviews().subscribe((data: Review[]) => {
      this.reviews = data;
    });
  }

  setRating(rating: number): void {
    this.review.rating = rating;
  }
}
