import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trinidad-40',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './trinidad-40.component.html',
  styleUrl: './trinidad-40.component.css'
})
export class Trinidad40Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"J. Trinidad Juárez C."
    },
    {
      id:1,
      name:"Maribel Linares"
    },

  ]
}