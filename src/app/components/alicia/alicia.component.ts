import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-alicia',
  standalone: true,
  imports: [ FooterComponent,HomeComponent,RouterLink],
  templateUrl: './alicia.component.html',
  styleUrl: './alicia.component.css'
})
export class AliciaComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Alicia Juárez C."
    },
    {
      id:2,
      name:"Tomás Gayosso"
    },

  ]
}
