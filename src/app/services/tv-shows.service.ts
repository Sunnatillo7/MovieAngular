import {  HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IRequest } from '../types/movies.interface';
import { options } from '../constants/config';

@Injectable({providedIn: 'root'})
export class TvShowsService {
   private http$ = inject(HttpClient)

     // Popular Tv Shows

  popularTvShows(){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/tv/popular`, options)
  }

  // Top Rated TV Shows
  topRatedTvShows(){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/tv/top_rated`, options)
  }

  // On the Air TV Shows
  onTheAirTvShows(){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/tv/on_the_air`, options)
  }

  // Airing Today TV Shows
  airingTodayTvShows(){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/tv/airing_today`, options)
  }


  getTvVideo(id:number){
    return this.http$.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
  }


  getSingleVideoOfTvShow(id:number){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/tv/${id}/videos`, options)
  }

    
}