import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-hugogol',
  standalone: true,
  imports: [FooterComponent,HomeComponent,RouterLink],
  templateUrl: './hugogol.component.html',
  styleUrl: './hugogol.component.css'
})
export class HugogolComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Victor Hugo Gutierrez F."
    },
    {
      id:1,
      name:"Bianka Ortega"
    },

  ]
}
