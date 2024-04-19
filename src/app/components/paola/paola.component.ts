import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paola',
  standalone: true,
  imports: [HomeComponent,FooterComponent,RouterLink],
  templateUrl: './paola.component.html',
  styleUrl: './paola.component.css'
})
export class PaolaComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Paola Gutierrez H."
    },
    {
      id:1,
      name:"Arturo Ramirez"
    },

  ]
}
