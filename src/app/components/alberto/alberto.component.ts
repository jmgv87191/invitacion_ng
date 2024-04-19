import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-alberto',
  standalone: true,
  imports: [FooterComponent,HomeComponent, RouterLink],
  templateUrl: './alberto.component.html',
  styleUrl: './alberto.component.css'
})
export class AlbertoComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Alberto Juárez Corriente"
    },
    {
      id:2,
      name:"Delia Hernández"
    },
    {
      id:3,
      name:"Diana Lizzet Juárez"
    },


  ]
}
