import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Invitado } from '../../interfaces/invitado';

@Component({
  selector: 'app-jmgr',
  standalone: true,
  imports: [ HomeComponent ],
  templateUrl: './jmgr.component.html',
  styleUrl: './jmgr.component.css'
})
export class JmgrComponent {

  titulo:string = "Juan manuel gutierrez de la rosa"
  
  invitados:Invitado[]=[
    {
      id:1,
      name:"Juan Manuel"
    },
    {
      id:2,
      name:"Alma"
    },
    {
      id:3,
      name:"Georgi"
    },
  ]

}
