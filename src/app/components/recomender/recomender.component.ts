import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import {Lectura} from 'src/app/core/models/lectura.model';
import { LecturasService } from 'src/app/core/service/lecturas.service';


@Component({
  selector: 'app-recomender',
  templateUrl: './recomender.component.html',
  styleUrls: ['./recomender.component.css']
})

export class RecomenderComponent implements OnInit {
  lectura:Lectura[];
  seleccionado: any;
  otroId:'2';
  number:3;
  mokId:any;
  lec1:any;
  lec2: any;
  lec3: any;
  numeroUsuario: any;
  constructor(private lecturaServicio:LecturasService) { }

  ngOnInit() {
    this.lectura=this.lecturaServicio.getAllLecturas(); //DEspliega todo el material
    //this.lectura=this.lecturaServicio.getAllLecturas();
    /*this.lecturaServicio.getAvance().subscribe((data) => this.mokId=data);
    console.log ("avance", this.mokId)
    this.numeroUsuario=sessionStorage.getItem('ident');
    console.log(typeof(this.numeroUsuario));
    console.log("Usuario:",this.numeroUsuario);*/
    //this.sanitizer.bypassSecurityTrustResourceUrl(this.lectura.href);//quizás mal direccionado
    //this.sanitizer.bypassSecurityTrustUrl(this.lectura.href);//quizás mal direccionado
    //console.log(this.lectura.href);
    //this.safeSrc=this.sanitizer.bypassSecurityTrustUrl(this.lectura.href)
  }
  /*genera(){
    this.lecturaServicio.getAvance().subscribe((data) => this.mokId=data);
    console.log("avance2", this.mokId)
    console.log("Usuario2:",this.numeroUsuario);
    this.lec1=this.lecturaServicio.getLectura('1');
    this.lec2=this.lecturaServicio.getLectura(this.numeroUsuario);
    this.lec3=this.lecturaServicio.getLectura(this.numeroUsuario+1);
    console.log(this.lec2)
    this.seleccionado=[this.lec1];
    this.seleccionado.push(this.lec2);
    this.seleccionado.push(this.lec3);

    console.log(this.seleccionado)

  }*/

  clickLectura(id: string): void {
    console.log('lectura');
    console.log(id);
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import {Lectura} from 'src/app/core/models/lectura.model';


@Component({
  selector: 'app-recomender',
  templateUrl: './recomender.component.html',
  styleUrls: ['./recomender.component.css']
})
export class RecomenderComponent implements OnInit {
   lectura: Lectura[]=[
    { id:'1',
      FKGL:'26.57',
      RDL2: '4',
      imagen: 'assets/imagenes/4997.webp',
      title: 'Samantha Daily',
      href: ""
    },
    {
      id:'2',
      FKGL:'25.42',
      RDL2:'5',
      imagen: 'assets/imagenes/5392.jpg',
      title: 'Noelle from Ireland',
      href: ""
    },
    {
      id:'3',
      FKGL:'22.32',
      RDL2:'9',
      imagen: 'assets/imagenes/6631.jpg',
      title: 'Best Body Fitness',
      href: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

//  addItem(): void {
//     this.items.push(this.title);
//   }
//   deleteItem(index: number): void {
//     this.items.splice(index, 1);
//   }

  clickLectura(id: number): void {
    console.log('lectura');
    console.log(id);
  }
}


*/
