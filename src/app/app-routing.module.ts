import { MensajesComponent } from './../pages/mensajes/mensajes.component';
import { LoginComponent } from './../pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioGuardService} from 'src/guards/usuario-guard.service';



const routes: Routes = [{
  path: '', component: LoginComponent
},{
  path:'mensajes' , component: MensajesComponent, canActivate: [UsuarioGuardService]
},{
  path:'**' , component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
