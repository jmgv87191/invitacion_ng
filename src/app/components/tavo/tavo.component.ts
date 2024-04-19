import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tavo',
  standalone: true,
  imports: [HomeComponent, FooterComponent, RouterLink],
  templateUrl: './tavo.component.html',
  styleUrl: './tavo.component.css'
})
export class TavoComponent {

  
  invitados:Invitado[]=[
    {
      id:1,
      name:"Octavio Garcia Gutierrez"
    },
    {
      id:2,
      name:"Yessenia F. Dibene"
    },
    {
      id:3,
      name:"Octavio Garcia"
    },


  ]
}
