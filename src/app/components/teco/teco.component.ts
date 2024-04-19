import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teco',
  standalone: true,
  imports: [HomeComponent, FooterComponent, RouterLink],
  templateUrl: './teco.component.html',
  styleUrl: './teco.component.css'
})

export class TecoComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Sergio Garcia Gutierrez"
    },
    {
      id:2,
      name:"Estrella E. Cerecer"
    },
  ]
}
