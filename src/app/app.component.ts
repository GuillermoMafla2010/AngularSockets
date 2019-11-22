import { ChatService } from './../servicios/chat.service';
import { WebsocketsService } from './../servicios/websockets.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basico';



  constructor(private wsService: WebsocketsService , public chatservice: ChatService) {

  }

  ngOnInit() {
    this.chatservice.sendMessage('Hola chat desde angular');

  }
}
