import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { LOGO_URL } from '../../constants/config';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';


@Component({
  selector: 'app-browse-header',
  standalone: true,
  imports: [NgIf, MatMenuModule, NgFor],
  templateUrl: './browse-header.component.html',
  styleUrl: './browse-header.component.scss'
})
export class BrowseHeaderComponent {
  private router = inject(Router)




  logo = LOGO_URL

  navList = ['Home', 'TV Shows', 'News & Popular', 'My List', 'Browse by Language']

  moviesType = ['Popular', 'Now Playing', 'Upcomming', 'Top Rated']
  tvShowsType = ['Popular', 'Aring Today', 'On TV', 'Top Rated']
  moreSectionType = ['Duscussion', 'Leadboard', 'Support']




  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }
  goToPages(item: string) {
    console.log(item);

    if (item === 'TV Shows') {
      this.router.navigate(['tv-shows'])
    }
    if (item === 'News & Popular') {
      this.router.navigate(['news-popular'])
    }
    if (item === 'My List') {
      this.router.navigate(['my-list'])
    }
    if (item === 'Home') {
      this.router.navigate(['/'])

    }

  }

  movieTypeClick(item: string) {
    if (item === 'Popular') {
      //  console.log(item);
       
      this.router.navigate(['popular-movies'])
    }
    if (item === 'Now Playing') {
      this.router.navigate(['now-playing-movies'])
    }
    if (item === 'Upcomming') {
      this.router.navigate(['upcoming-movies'])
    }
    if (item === 'Top Rated') {
      this.router.navigate(['top-rated-movies'])
    }
  }

}
