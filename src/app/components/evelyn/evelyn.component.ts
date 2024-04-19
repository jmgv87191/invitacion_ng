import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-evelyn',
  standalone: true,
  imports: [ HomeComponent, FooterComponent, RouterLink ],
  templateUrl: './evelyn.component.html',
  styleUrl: './evelyn.component.css'
})
export class EvelynComponent {


  invitados:Invitado[]=[
    {
      id:1,
      name:"Evely Gutierrez"
    },
    {
      id:2,
      name:"Ivan Toxqui G."
    },
    {
      id:3,
      name:"Seiva I, Sanchez G."
    },


  ]


}
