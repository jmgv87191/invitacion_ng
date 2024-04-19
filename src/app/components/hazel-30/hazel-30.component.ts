import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hazel-30',
  standalone: true,
  imports: [ FooterComponent, HomeComponent, RouterLink ],
  templateUrl: './hazel-30.component.html',
  styleUrl: './hazel-30.component.css'
})
export class Hazel30Component {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Hazel Xkarett Solano García"
    },
    {
      id:2,
      name:"Acompañante"
    },
  ]
}
