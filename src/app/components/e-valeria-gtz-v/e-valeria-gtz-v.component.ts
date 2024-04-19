import { Component } from '@angular/core';
import { JmgrComponent } from '../jmgr/jmgr.component';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-e-valeria-gtz-v',
  standalone: true,
  imports: [JmgrComponent, HomeComponent, FooterComponent, RouterLink],
  templateUrl: './e-valeria-gtz-v.component.html',
  styleUrl: './e-valeria-gtz-v.component.css'
})
export class EValeriaGtzVComponent {

  titulo:string = "E. Valeria"
  
  invitados:Invitado[]=[
    {
      id:1,
      name:"E. Valeria Gutierrez"
    },
    {
      id:2,
      name:"Arturo Ibarra"
    },
    {
      id:3,
      name:"Jann A. Ibarra"
    },
    {
      id:3,
      name:"Ana Lilian Ibarra"
    },
    {
      id:3,
      name:"Jimena Ibarra"
    },

  ]


}
