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
import { ListausuariosComponent } from '../componentes/listausuarios/listausuarios.component';
import { MensajesComponent } from '../pages/mensajes/mensajes.component';
import { LoginComponent } from '../pages/login/login.component';

const config: SocketIoConfig={
  url:environment.wsUrl,options:{}
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListausuariosComponent,
    MensajesComponent,
    LoginComponent
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
