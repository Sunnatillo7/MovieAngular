import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, runInInjectionContext, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IResults } from '../../types/movies.interface';
import { tmdbConfigs } from '../../constants/config';
import { DescriptionPipe } from '../../shared/pipes/description.pipe';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastService } from '../../constants/toast.service';

@Component({
  selector: 'app-movie-carusel',
  standalone: true,
  imports: [NgFor, DescriptionPipe],
  templateUrl: './movie-carusel.component.html',
  styleUrl: './movie-carusel.component.scss',
  animations:[
    trigger('fade',[
      transition('void => *', [
        style({opacity:0}),
        animate(300, style({opacity:1}))
      ])
    ])
  ]
})
export class MovieCaruselComponent implements AfterViewInit {

   private router = inject(Router)

   private toastr = inject(ToastService)
  imgBase = tmdbConfigs.base_path

  selectedCart:string | null = null



   @Input() videoContent: IResults[] = []
   @Input() title!: string

  @ViewChild('swiperContainer') swiperContainer!: ElementRef

  ngAfterViewInit(): void {
    this.initSwiper()
  }

  goToSinglePage(id:number, title:string){
    if(title !== 'Top Rated TV Shows'
     && title !== 'Airing Today TV Shows'
      && title !== 'Popular TV Shows' 
      && title !== 'On The Air TV Shows'
      && title !== 'Popular TV Shows'
      ){
     this.router.navigate(['single-page/' + id])
    }else{
      this.toastr.showError('We do not have video content for this item', 'Please check another content!')
    }

    // this.router.navigate(['single-page/' + id])

    

  }


  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,

        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  setHoverMovie(movie:IResults){
    this.selectedCart = movie.title ?? movie.name
  }

  clearHoverMovie(){
    this.selectedCart = null
  }

}
