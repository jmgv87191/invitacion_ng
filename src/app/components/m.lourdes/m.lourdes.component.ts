import { Component } from '@angular/core';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-m.lourdes',
  standalone: true,
  imports: [HomeComponent,FooterComponent,RouterLink],
  templateUrl: './m.lourdes.component.html',
  styleUrl: './m.lourdes.component.css'
})
export class MLourdesComponent {
  invitados:Invitado[]=[
    {
      id:1,
      name:"Maria de Lourdes Juárez Corriente"
    },

  ]
}
