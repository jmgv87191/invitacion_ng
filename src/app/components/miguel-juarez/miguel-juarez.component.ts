import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-miguel-juarez',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './miguel-juarez.component.html',
  styleUrl: './miguel-juarez.component.css'
})
export class MiguelJuarezComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Miguel Juárez C"
    },
    {
      id:2,
      name:"Maricela Tzompa"
    },
    {
      id:3,
      name:"Elizabeth Juárez"
    },
    {
      id:4,
      name:"Liliana Juárez"
    },

  ]
}
