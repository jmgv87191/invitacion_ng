import { Component } from '@angular/core';
import { AutoPlayComponent } from '../auto-play/auto-play.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoPlayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
