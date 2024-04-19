import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-polo-34',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './polo-34.component.html',
  styleUrl: './polo-34.component.css'
})
export class Polo34Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Leopoldo Partida"
    },

  ]
}
