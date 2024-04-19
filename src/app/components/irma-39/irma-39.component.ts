import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-irma-39',
  standalone: true,
  imports: [FooterComponent,HomeComponent, RouterLink],
  templateUrl: './irma-39.component.html',
  styleUrl: './irma-39.component.css'
})
export class Irma39Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Irma Juárez C."
    },
    {
      id:1,
      name:"Neil Linares"
    },

  ]
}
