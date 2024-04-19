import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-calayo',
  standalone: true,
  imports: [HomeComponent, FooterComponent, RouterLink],
  templateUrl: './calayo.component.html',
  styleUrl: './calayo.component.css'
})
export class CalayoComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Jesus C. Garcia Gutierrez"
    },
    {
      id:2,
      name:"Iliana Verdugo"
    },
  ]
}
