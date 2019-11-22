import { ChatService } from './../../servicios/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text=''
  constructor(public cs:ChatService) { }

  ngOnInit() {
    this.cs.getMessages().subscribe(x=>{
      console.log(x)
    })
  }

  enviar(){
    this.cs.sendMessage(this.text)
    console.log(this.text);
    this.text=''
  }

}
