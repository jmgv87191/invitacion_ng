import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kari',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './kari.component.html',
  styleUrl: './kari.component.css'
})
export class KariComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Carina Gutierrez F."
    },
    {
      id:2,
      name:"Adal S. Gomez"
    },



  ]
}
