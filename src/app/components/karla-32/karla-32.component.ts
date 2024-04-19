import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-karla-32',
  standalone: true,
  imports: [FooterComponent, HomeComponent,RouterLink ],
  templateUrl: './karla-32.component.html',
  styleUrl: './karla-32.component.css'
})
export class Karla32Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Karla Duran"
    },
    {
      id:2,
      name:"Iván Barrera"
    },

  ]
}
