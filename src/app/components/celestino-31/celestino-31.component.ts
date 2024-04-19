import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-celestino-31',
  standalone: true,
  imports: [FooterComponent,HomeComponent,RouterLink],
  templateUrl: './celestino-31.component.html',
  styleUrl: './celestino-31.component.css'
})
export class Celestino31Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Celestino Matias Damian"
    },
    {
      id:2,
      name:"Magui Ríos"
    },
    {
      id:3,
      name:"Bebé Mael"
    },
  ]
}
