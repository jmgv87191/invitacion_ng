import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sheila-35',
  standalone: true,
  imports: [FooterComponent, RouterLink, HomeComponent],
  templateUrl: './sheila-35.component.html',
  styleUrl: './sheila-35.component.css'
})
export class Sheila35Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Sheila Narayan"
    },

  ]
}