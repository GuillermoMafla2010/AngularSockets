
import { WebsocketsService } from './../../servicios/websockets.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre='';
  constructor(public wss: WebsocketsService , private router: Router) { }


  ingresar(){
    this.wss.loginWS(this.nombre).then(()=>{
      console.log("Redireccionando");
      this.router.navigateByUrl('/mensajes')
    })
  }

  ngOnInit() {
  }

}
