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
      de : 'Fernando',
      cuerpo : mensaje
    };


    this.wss.emit('mensaje', payload);
  }

  getMessages(){
    return this.wss.listen('mensaje-nuevo')
  }
}
