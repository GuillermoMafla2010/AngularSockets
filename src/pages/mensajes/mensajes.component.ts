import { WebsocketsService } from './../../servicios/websockets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public wss: WebsocketsService) { }

  ngOnInit() {

  }

  salir(){
    this.wss.logoutws()
  }



}
