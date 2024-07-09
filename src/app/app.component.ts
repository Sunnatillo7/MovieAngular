import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowseHeaderComponent } from './components/browse-header/browse-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrowseHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix';
}
