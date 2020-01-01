import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {Usuario} from 'src/modelos/usuarios';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  public socketStatus = false;
  public usuario: Usuario;
  constructor(private socket: Socket , public router:Router) {
    this.cargarStorage();
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect',()=>{
      console.log("Conectado al servidor")
      this.socketStatus=true
      this.cargarStorage();
    })

    this.socket.on('disconnect',()=>{
      console.log("Desonectado al servidor")
      this.socketStatus=false
    })


  }


  emit(evento:string ,payload?:any , callback?:any){
    console.log("Emitiendo" + evento);
    this.socket.emit(evento , payload , callback);

  }

  listen( evento:string ){
    return this.socket.fromEvent(evento);
  }

  loginWS(nombre:string){


    return new Promise((resolve , reject )=>{
      console.log(`Configurando ${nombre}`)
      this.emit('configurar-usuario', {nombre}, (resp) =>{
        this.usuario= new Usuario(nombre)
       this.guardarStorage();
       resolve();
        console.log(resp)
      })
    })

  }


  guardarStorage(){
    localStorage.setItem('usuario',JSON.stringify(this.usuario))
  }


  cargarStorage(){
    if(localStorage.getItem('usuario')){

      this.usuario=JSON.parse(localStorage.getItem('usuario'));
      this.loginWS(this.usuario.nombre);

    }
  }

  getUsuario(){
    return this.usuario
  }

  logoutws(){
    this.usuario=null;
    localStorage.removeItem('usuario');
    const payload ={
      nombre:'sin-nombre'
    }

    this.emit('configurar-usuario',payload,()=>{});
    this.router.navigateByUrl('');

  }
}
