import { Component, Input } from '@angular/core';
import { Movie } from './movies.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  @Input({required:true}) movie!:Movie
}
