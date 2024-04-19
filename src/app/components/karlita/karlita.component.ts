import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-karlita',
  standalone: true,
  imports: [FooterComponent,RouterLink, HomeComponent],
  templateUrl: './karlita.component.html',
  styleUrl: './karlita.component.css'
})
export class KarlitaComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Karla C. Gutierrez"
    },
    {
      id:2,
      name:"Francisco Muñeton"
    },

  ]
}
