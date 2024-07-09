import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { options } from '../constants/config';
import { IRequest } from '../types/movies.interface';




@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http$ = inject(HttpClient)

  getMovie(){
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/discover/movie', options)
  }

  getTvShows() {
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/discover/tv', options)
  }


  getBannerImage(id: number) {
    return this.http$.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http$.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http$.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/movie/upcoming', options)
  }

  // Examples

  // Bu tv show hillari api si Comedy, Animation ...
  getData(){
    return this.http$.get<IRequest>('https://api.themoviedb.org/3/genre/tv/list', options)
  }


  getSingleMovieVideo(id:number){
    return this.http$.get<IRequest>(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
  }





}
