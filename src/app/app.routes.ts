import { Routes } from '@angular/router';
import { IsAuthedGuard, LogoutGuard } from './constants/auth.guard';
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path:'login',
        loadComponent: ()=> import('./pages/login/login.component').then(c => c.LoginComponent),
        canActivate:[LogoutGuard]
    },
    {
        path:'browse',
        loadComponent:()=> import('./pages/browse/browse.component').then(c => c.BrowseComponent),
        canActivate:[IsAuthedGuard]
        
    },
    {
       path:'tv-shows',
       loadComponent:() => import('./pages/tv-shows/tv-shows.component').then(c => c.TvShowsComponent),
       canActivate:[IsAuthedGuard]
    },
    {
       path:'my-list',
       loadComponent:() => import('./pages/my-list/my-list.component').then(c => c.MyListComponent),
       canActivate:[IsAuthedGuard]
    },
    {
       path:'news-popular',
       loadComponent:() => import('./pages/news-popular/news-popular.component').then(c => c.NewsPopularComponent),
       canActivate:[IsAuthedGuard]
    },
    {
      path:'single-page/:id',
      loadComponent:() => import('./pages/single-page-of-movie/single-page-of-movie.component').then(c =>c.SinglePageOfMovieComponent),
      canActivate:[IsAuthedGuard]

    },
    {
      path:'popular-movies',
      loadComponent:() => import('./pages/popular-movies/popular-movies.component').then(c =>c.PopularMoviesComponent),
      canActivate:[IsAuthedGuard]

    },
    {
      path:'top-rated-movies',
      loadComponent:() => import('./pages/top-rated-movies/top-rated-movies.component').then(c =>c.TopRatedMoviesComponent),
      canActivate:[IsAuthedGuard]

    },
    {
      path:'upcoming-movies',
      loadComponent:() => import('./pages/upcoming-movies/upcoming-movies.component').then(c =>c.UpcomingMoviesComponent),
      canActivate:[IsAuthedGuard]

    },
    {
      path:'now-playing-movies',
      loadComponent:() => import('./pages/now-playing-movies/now-playing-movies.component').then(c =>c.NowPlayingMoviesComponent),
      canActivate:[IsAuthedGuard]

    },

];
