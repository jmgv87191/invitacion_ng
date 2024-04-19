import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-h-sachez',
  standalone: true,
  imports: [HomeComponent,FooterComponent,RouterLink],
  templateUrl: './h-sachez.component.html',
  styleUrl: './h-sachez.component.css'
})
export class HSachezComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Miguel Resendiz"
    },


  ]
}
