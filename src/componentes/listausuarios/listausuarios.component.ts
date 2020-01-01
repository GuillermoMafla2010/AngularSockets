import { ChatService } from './../../servicios/chat.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {

  usuariosActivosObs:Observable<any>

  constructor(public cs:ChatService) { }

  ngOnInit() {
    this.usuariosActivosObs=this.cs.getUsuariosActivos();
    this.cs.emitirUsuariosActivos();
  }

}
