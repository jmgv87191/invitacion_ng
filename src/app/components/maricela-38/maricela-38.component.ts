import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-maricela-38',
  standalone: true,
  imports: [FooterComponent,HomeComponent,RouterLink],
  templateUrl: './maricela-38.component.html',
  styleUrl: './maricela-38.component.css'
})
export class Maricela38Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Maricela Juárez C."
    },
    {
      id:2,
      name:"Alfonso Carrasco"
    },

  ]
}
