import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IResults } from '../../types/movies.interface';
import { MovieCartComponent } from '../../components/movie-cart/movie-cart.component';

@Component({
  selector: 'popular-movies',
  standalone: true,
  imports: [MovieCartComponent],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.scss'
})
export class PopularMoviesComponent implements OnInit {

  movieService = inject(MovieService)

  popularMovies: IResults[] = []

ngOnInit(): void {
  this.movieService.getPopularMovies().subscribe(data =>{
    this.popularMovies = data.results
  })
}
}
