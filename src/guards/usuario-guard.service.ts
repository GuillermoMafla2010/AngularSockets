import { WebsocketsService } from './../servicios/websockets.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate {

  constructor(public wss: WebsocketsService , public router: Router) { }

  canActivate(){
      if(this.wss.getUsuario()){
        return true;
      }else{
        this.router.navigateByUrl("/")
        return false;
      }
  }
}
