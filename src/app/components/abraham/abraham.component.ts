import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-abraham',
  standalone: true,
  imports: [ HomeComponent, FooterComponent, RouterLink ],
  templateUrl: './abraham.component.html',
  styleUrl: './abraham.component.css'
})
export class AbrahamComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Abraham V. Garcia"
    },

  ]
}

