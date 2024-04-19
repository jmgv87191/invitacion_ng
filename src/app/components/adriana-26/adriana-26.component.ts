import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adriana-26',
  standalone: true,
  imports: [ FooterComponent,HomeComponent, RouterLink ],
  templateUrl: './adriana-26.component.html',
  styleUrl: './adriana-26.component.css'
})
export class Adriana26Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Adriana Gayosso Juárez"
    },


  ]
}
