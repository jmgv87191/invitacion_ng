import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jose-37',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './jose-37.component.html',
  styleUrl: './jose-37.component.css'
})
export class Jose37Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Jose Trinidad Juárez"
    },
    {
      id:2,
      name:"Aurelia Corriente"
    },

  ]
}
