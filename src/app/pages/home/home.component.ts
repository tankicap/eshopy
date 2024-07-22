import { Component } from '@angular/core';
import { MainComponent } from "../../main/main.component";
import { ProductListsComponent } from "../../product/product-lists/product-lists.component";
import { ReviewComponent } from "../../reviews/review/review.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, ProductListsComponent, ReviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
