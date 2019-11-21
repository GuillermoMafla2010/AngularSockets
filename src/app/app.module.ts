import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importando Sockets
import { SocketIoModule , SocketIoConfig} from 'ngx-socket-io';
import { FooterComponent } from '../componentes/footer/footer.component';

const config: SocketIoConfig={
  url:environment.wsUrl,options:{}
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
