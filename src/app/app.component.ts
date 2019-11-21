import { WebsocketsService } from './../servicios/websockets.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basico';

ngOnInit(){

}

  constructor(private wsService: WebsocketsService) {

  }
}
