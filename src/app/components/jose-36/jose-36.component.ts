import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-jose-36',
  standalone: true,
  imports: [FooterComponent,HomeComponent, RouterLink],
  templateUrl: './jose-36.component.html',
  styleUrl: './jose-36.component.css'
})
export class Jose36Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Jose Alfredo Hernández de Dios"
    },
    {
      id:2,
      name:"Isabel Arias Pérez"
    },

  ]
}
