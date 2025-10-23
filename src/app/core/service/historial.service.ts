import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  //url='../../'; // disponer url de su servidor que tiene las páginas PHP

  url='http:tutor-inteligente.facultaddelenguas.com/disp/front1/assets/lecturas/';

  constructor(private http: HttpClient) { }

  alta(articulo:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
  }
  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  }

/*  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }*/
}
