import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'news-popular',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './news-popular.component.html',
  styleUrl: './news-popular.component.scss'
})
export class NewsPopularComponent {

}
