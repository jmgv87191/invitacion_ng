import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-betito',
  standalone: true,
  imports: [FooterComponent, RouterLink, HomeComponent],
  templateUrl: './betito.component.html',
  styleUrl: './betito.component.css'
})
export class BetitoComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Carlos Alberto Juárez H."
    },
  ]
}
