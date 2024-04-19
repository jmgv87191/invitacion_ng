import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-e-juarez',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './e-juarez.component.html',
  styleUrl: './e-juarez.component.css'
})
export class EJuarezComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Eduardo Juárez Tzompa"
    },
    {
      id:2,
      name:"Aislim PH"
    },
    {
      id:3,
      name:"Eduardo Juárez P."
    },
    {
      id:4,
      name:"Matias Juárez P."
    },
  ]
}
