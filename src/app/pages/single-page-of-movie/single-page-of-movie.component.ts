import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { IResults } from '../../types/movies.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-single-page-of-movie',
  standalone: true,
  imports: [],
  templateUrl: './single-page-of-movie.component.html',
  styleUrl: './single-page-of-movie.component.scss'
})
export class SinglePageOfMovieComponent implements OnInit {
  private urlRoutes = inject(ActivatedRoute)

  movieService = inject(MovieService)

  tvShowsService = inject(TvShowsService)

  private sanitizer = inject(DomSanitizer)

  fullURL  = this.sanitizer.bypassSecurityTrustResourceUrl('') 




 ngOnInit(): void {
  const id = this.urlRoutes.snapshot.params['id']
 // TODO Create resolver

  this.movieService.getSingleMovieVideo(id).subscribe(data =>{
    if(+id === data.id){
      this.fullURL = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.results[0].key}`)
  
    }else{
      this.tvShowsService.getSingleVideoOfTvShow(id).subscribe(data =>{
          this.fullURL = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.results[0].key}`)
        })

    }
    
  })     

  
 }

}
