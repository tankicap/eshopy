import { Component, inject } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { Movie } from './movies/movies.model';
import { MoviesService } from './movies/service/movies.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  movie: Movie[] = [];
  

  private movieService=inject(MoviesService);


  ngOnInit(){
    this.movie=this.movieService.getMovies();
  }

}
