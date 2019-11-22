import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Importando Sockets
import { SocketIoModule , SocketIoConfig} from 'ngx-socket-io';
import { FooterComponent } from '../componentes/footer/footer.component';
import { ChatComponent } from '../componentes/chat/chat.component';

const config: SocketIoConfig={
  url:environment.wsUrl,options:{}
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
