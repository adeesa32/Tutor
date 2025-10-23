import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../core/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;
  usuario:string;

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    sessionStorage.clear()
   }

   ngOnChanges(){
    console.log("tipo de variable", typeof(this.usuario));
    console.log("usuario:", this.usuario);  //typeof(var);
    //console.log("longitud", this.usuario.length);

   }


  login() {   // no es la mejor práctica llamar servicios en el constructor, deberían llamarse en el ngOnInit
    //const user = { user: this.user, password: this.password };
    this.userService.buscausuario(this.user,this.password).subscribe((data) => this.usuario=data); //data[0]
    error=>{console.log(error); }
    console.log(this.usuario);
    /*if (this.usuario !== undefined || (this.usuario.length>4 && this.usuario.length<10)) {*/
      this.userService.setToken(this.usuario);
      console.log("almacenado:", sessionStorage.getItem('ident'))
    //}
  }

  estaAutenticado():boolean{
    return this.userService.estaAutenticado();
  }

  ngOnDestroy():void{

  }
  /*login() {   // no es la mejor práctica llamar servicios en el constructor, deberían llamarse en el ngOnInit
    const user = { user: this.user, password: this.password };
    this.userService.buscausuario(this.user,this.password).subscribe((data) => {
      //console.log(data);
      this.usuario=data[0]
      this.userService.setToken(this.usuario);
      console.log('este es el usuario')  observe que faltan varias comas y punto y coma
      console.log(this.usuario)
      },
      error => {
        console.log(error);
      });

  }*/

}
