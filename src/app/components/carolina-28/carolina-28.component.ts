import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carolina-28',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './carolina-28.component.html',
  styleUrl: './carolina-28.component.css'
})
export class Carolina28Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Carolina López Escobar"
    },
    {
      id:2,
      name:"Juan Pablo López"
    },
  ]
}
