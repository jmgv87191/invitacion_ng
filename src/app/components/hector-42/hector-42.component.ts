import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-hector-42',
  standalone: true,
  imports: [ FooterComponent, HomeComponent, RouterLink],
  templateUrl: './hector-42.component.html',
  styleUrl: './hector-42.component.css'
})
export class Hector42Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Hector Juárez C."
    },
    {
      id:2,
      name:"Maricela Ríos G."
    },



  ]
}
