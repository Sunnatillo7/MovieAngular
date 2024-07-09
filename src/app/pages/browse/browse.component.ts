import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { IResults } from '../../types/movies.interface';
import { tmdbConfigs } from '../../constants/config';




import { DomSanitizer } from '@angular/platform-browser';
import { BannerComponent } from '../../components/banner/banner.component';
import { BrowseHeaderComponent } from '../../components/browse-header/browse-header.component';
import { MovieService } from '../../services/movie.service';
import { MovieCaruselComponent } from '../../components/movie-carusel/movie-carusel.component';
import {  Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TvShowsService } from '../../services/tv-shows.service';





@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,  BannerComponent, BrowseHeaderComponent, MovieCaruselComponent, CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  authService = inject(AuthService)

  tvShowsService = inject(TvShowsService)

  movieService = inject(MovieService)

  imagePath = tmdbConfigs.base_path


  popularMovies: IResults[] = []
  nowPlayingMovies: IResults[] = []
  tvShows: IResults[] = []
  ratedMovies: IResults[] = []
  upcomingMovies: IResults[] = []
  topRatedMovies: IResults[] = []
  movies: IResults[] = []

  bannerDetail$ = new Observable<any>()
  bannerVideo$ = new Observable<any>()







  ngOnInit(): void {





    this.movieService.getMovie().subscribe(data => {
      this.movies = data.results
      this.bannerDetail$ = this.movieService.getBannerDetail(data.results[4].id)
      this.bannerVideo$ = this.movieService.getBannerVideo(data.results[4].id)
      //  this.movieService.getBannerVideo(data.results[3].id).subscribe(data => console.log(data))
      
    })

    this.movieService.getNowPlayingMovies().subscribe(data => {
      this.nowPlayingMovies = data.results
    })

    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results
    })



    this.movieService.getTopRated().subscribe(data => {
      this.topRatedMovies = data.results
    })

    this.movieService.getTvShows().subscribe(data => {
      this.tvShows = data.results
    })

    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data.results
       
  
      
    })


    // this.movieService.getData().subscribe(data =>{
    //   console.log(data);
      
    // })







  }


}
