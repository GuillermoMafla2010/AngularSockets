import { WebsocketsService } from './../../servicios/websockets.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre='';
  constructor(public wss: WebsocketsService) { }


  ingresar(){
    this.wss.loginWS(this.nombre);
  }

  ngOnInit() {
  }

}
