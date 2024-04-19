import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-daniel-27',
  standalone: true,
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './daniel-27.component.html',
  styleUrl: './daniel-27.component.css'
})
export class Daniel27Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Daniel Gayosso Juárez"
    },
    {
      id:2,
      name:"Abigail Colorado"
    },
    {
      id:3,
      name:"Daniel Gayosso"
    },
    {
      id:4,
      name:"Gael Gayosso"
    },
    {
      id:5,
      name:"Diego Gayosso"
    },


  ]
}
