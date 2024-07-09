import { Component } from '@angular/core';
import { MovieCartComponent } from '../../components/movie-cart/movie-cart.component';

@Component({
  selector: 'my-list',
  standalone: true,
  imports: [MovieCartComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss'
})
export class MyListComponent {

  

}
