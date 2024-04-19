import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bay',
  standalone: true,
  imports: [HomeComponent,FooterComponent,RouterLink],
  templateUrl: './bay.component.html',
  styleUrl: './bay.component.css'
})
export class BayComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Bayron García Juárez"
    },
    {
      id:2,
      name:"Alejandra Deyanira Barbosa C."
    },
    {
      id:3,
      name:"Bárbara Sofía García B."
    },

  ]
}
