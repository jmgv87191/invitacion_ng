import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eloisa-41',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './eloisa-41.component.html',
  styleUrl: './eloisa-41.component.css'
})
export class Eloisa41Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Eloisa Juárez C."
    },
    {
      id:2,
      name:"Yosselin Pérez J."
    },
    {
      id:3,
      name:"Alma Pérez J."
    },


  ]
}
