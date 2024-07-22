import { Injectable } from '@angular/core';
import { Movie } from '../movies.model';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies = [
    { image: 'main/netf.jpg' },
    { image: 'main/nba.jpg' },
    { image: 'main/hbo.jpg' },
    {  image: 'main/spotify.jpg' },
    {image:'main/disney.jpg'},
    {image:'main/canva.png'}
  ];
  
  getMovies():Movie[]{
    return this.movies;
   }
  constructor() { }
}
