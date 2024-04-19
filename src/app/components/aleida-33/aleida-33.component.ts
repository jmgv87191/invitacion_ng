import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aleida-33',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './aleida-33.component.html',
  styleUrl: './aleida-33.component.css'
})
export class Aleida33Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Aleida Flores Pérez"
    },
    {
      id:2,
      name:"Juan G. Tejas J."
    },


  ]
}
