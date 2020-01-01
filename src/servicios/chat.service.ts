import { WebsocketsService } from './websockets.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wss: WebsocketsService
  ) { }

  sendMessage( mensaje: string) {
    const payload = {
      de : this.wss.getUsuario().nombre,
      cuerpo : mensaje
    };


    this.wss.emit('mensaje', payload);
  }

  getMessages(){
    return this.wss.listen('mensaje-nuevo');
  }

  getmensajeprivado(){
    return this.wss.listen( 'mensaje-privado' );
  }

  getUsuariosActivos(){
    return this.wss.listen('usuarios-activos');
  }

  emitirUsuariosActivos(){
    return this.wss.emit('obtener-usuarios');
  }
}
