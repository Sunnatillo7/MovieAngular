import { Component, inject, OnInit } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';
import { MovieCaruselComponent } from '../../components/movie-carusel/movie-carusel.component';
import { IResults } from '../../types/movies.interface';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'tv-shows',
  standalone: true,
  imports: [MovieCaruselComponent, NavbarComponent],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})
export class TvShowsComponent implements OnInit {
  private tvShowsService = inject(TvShowsService)

  airingTodayTvShows: IResults[] = []
  onTheAirTvShows: IResults[] = []
  popularTvShows: IResults[] = []
  topRatedTvShows: IResults[] = []



  ngOnInit(): void {


    this.tvShowsService.airingTodayTvShows().subscribe(data => {
      // console.log(data);
      this.airingTodayTvShows = data.results

    })
    this.tvShowsService.onTheAirTvShows().subscribe(data => {
      // console.log(data);
      this.onTheAirTvShows = data.results

    })
    this.tvShowsService.popularTvShows().subscribe(data => {
      // console.log(data);
      this.popularTvShows = data.results

    })

    this.tvShowsService.topRatedTvShows().subscribe(data => {
      // console.log(data);
      this.topRatedTvShows = data.results



    })

  }

}
