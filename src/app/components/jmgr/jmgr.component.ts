import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Invitado } from '../../interfaces/invitado';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-jmgr',
  standalone: true,
  imports: [ HomeComponent, FooterComponent ],
  templateUrl: './jmgr.component.html',
  styleUrl: './jmgr.component.css'
})
export class JmgrComponent {

  titulo:string = "Juan manuel gutierrez de la rosa"
  
  invitados:Invitado[]=[
    {
      id:1,
      name:"Juan Manuel Gutierrez de la Rosa"
    },
    {
      id:2,
      name:"Alma N. Nuñez"
    },
    {
      id:3,
      name:"Georgina S. Gutierrez"
    },
    {
      id:4,
      name:"Sara Gutierrez"
    },
  ]

}
