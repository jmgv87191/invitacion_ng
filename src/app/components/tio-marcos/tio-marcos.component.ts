import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tio-marcos',
  standalone: true,
  imports: [ FooterComponent, HomeComponent, RouterLink ],
  templateUrl: './tio-marcos.component.html',
  styleUrl: './tio-marcos.component.css'
})
export class TioMarcosComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Marco A. Gutierrez de la R."
    },
    {
      id:1,
      name:"Cecilia Higuera"
    },

  ]
}
