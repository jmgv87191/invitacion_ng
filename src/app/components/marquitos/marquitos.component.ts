import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marquitos',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './marquitos.component.html',
  styleUrl: './marquitos.component.css'
})
export class MarquitosComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Marco A. Gutierrez H."
    },
    {
      id:2,
      name:"Yasadora Herrera"
    },

  ]
}
