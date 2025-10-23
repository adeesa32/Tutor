import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {

  url='../front1/assets/';  // aquí se coloca la ruta donde están guardados los php dentro de assets

  constructor(private http: HttpClient) {}

  guardarregistro(registro:any):Observable<any> {
    console.log(registro)
    return this.http.post(`${this.url}guardarregistro.php`, JSON.stringify(registro), {responseType:'text'});
  }

  buscausuario(user: string, password: string):Observable<any> {
    console.log("servicio")
    console.log(user,password)  //se ejectua hasta aquí, pero voy a solicitar sólo la consulta, porque no encuentra archivo con datos incluidos
    //user=JSON.stringify(user)
    //password=JSON.stringify(password)
    return this.http.get(`${this.url}buscausuario.php?user=${user}&password=${password}`, {responseType:'text'});//, JSON.stringify(user);
    //return this.http.get(`${this.url}buscausuario.php`, {responseType:'text'});//, JSON.stringify(user);
  }

  setToken(token: string) {
    sessionStorage.setItem('ident', token);
  }
  getToken() {
     return sessionStorage.getItem('ident');
  }

  getUser(){
    return this.http.get(`${this.url}buscausuario.php`)
  }

  getUserLogged(){
   const usuario=this.getToken();
    // aquí va el codigo para devolveer el usuario(o token)
  }

  estaAutenticado(): boolean {
     if (sessionStorage.getItem('ident')) {
        return true;
     } else {
       return false;
     }
 }
 logout(){
  sessionStorage.clear();
 }
}

      //this.userService.setToken(data.token);
      //sessionStorage.clear()
      // Create item:
      //sessionStorage.setItem('usuario', data);
      // Read item:
      //let item = sessionStorage.getItem('usuario');
