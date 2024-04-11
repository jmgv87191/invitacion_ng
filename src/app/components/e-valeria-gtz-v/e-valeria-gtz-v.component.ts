import { Component } from '@angular/core';
import { JmgrComponent } from '../jmgr/jmgr.component';
import { Invitado } from '../../interfaces/invitado';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-e-valeria-gtz-v',
  standalone: true,
  imports: [JmgrComponent, HomeComponent, FooterComponent],
  templateUrl: './e-valeria-gtz-v.component.html',
  styleUrl: './e-valeria-gtz-v.component.css'
})
export class EValeriaGtzVComponent {

  titulo:string = "E. Valeria"
  
  invitados:Invitado[]=[
    {
      id:1,
      name:"valeria"
    },
    {
      id:2,
      name:"arturo"
    },
    {
      id:3,
      name:"jann"
    },
  ]


}
