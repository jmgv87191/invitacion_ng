import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rosa-44',
  standalone: true,
  imports: [HomeComponent,FooterComponent,RouterLink],
  templateUrl: './rosa-44.component.html',
  styleUrl: './rosa-44.component.css'
})
export class Rosa44Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Rosa María Castro G."
    },
    {
      id:2,
      name:"Alexa Arce"
    },

  ]
}
