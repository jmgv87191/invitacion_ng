import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asael',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './asael.component.html',
  styleUrl: './asael.component.css'
})
export class AsaelComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Asael Garíca Juárez"
    },
    {
      id:2,
      name:"Leyvi Ana Ruíz"
    },
    {
      id:3,
      name:"Fernanda García"
    },

  ]
}
