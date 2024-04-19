import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-laura-43',
  standalone: true,
  imports: [FooterComponent, HomeComponent,RouterLink],
  templateUrl: './laura-43.component.html',
  styleUrl: './laura-43.component.css'
})
export class Laura43Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Laura Juárez C."
    },
    {
      id:2,
      name:"Paola Piedras J."
    },
    {
      id:2,
      name:"Ángel Piedras J."
    },

  ]
}
