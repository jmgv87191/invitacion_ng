import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carmen-29',
  standalone: true,
  imports: [FooterComponent,HomeComponent,RouterLink],
  templateUrl: './carmen-29.component.html',
  styleUrl: './carmen-29.component.css'
})
export class Carmen29Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Maricarmen Hernández"
    },
    {
      id:2,
      name:"José Alberto Hernández"
    },
    {
      id:3,
      name:"Angel Hernández"
    },
  ]
}
