import { Injectable } from '@angular/core';
import {Lectura} from '../models/lectura.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
//Aquí manda a llamar el detalle de la lectura
export class LecturasService {
  url='../front1/assets/';
  lecturas: Lectura[]=[
    {id:'1',title:"Hannah's story",FKGL:'3.21',RDL2:'34.19',imagen:'/dist/front1/assets/imagenes/5197.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5197.htm',}, //quizás falla por el apostrofe
    {id:'2',title:'My routine',FKGL:'4.2',RDL2:'34',imagen:'/dist/front1/assets/imagenes/5119.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5119.htm',},
    {id:'3',title:'Dear Mr. Jackson',FKGL:'4.56',RDL2:'29.38',imagen:'/dist/front1/assets/imagenes/5429.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5429.htm',},
    {id:'4',title:'What do you do with your free time',FKGL:'4.85',RDL2:'29.33',imagen:'/dist/front1/assets/imagenes/4417.jpg',href:'/dist/front1/assets/lecturas/cuestionario_4417.htm',},
    {id:'5',title:"Malcoms trip",FKGL:'6.09',RDL2:'27.81',imagen:'/dist/front1/assets/imagenes/5013.webp',href:'/dist/front1/assets/lecturas/cuestionario_5013.htm',},
    {id:'6',title:"Frank's story",FKGL:'5.1',RDL2:'26.86',imagen:'/dist/front1/assets/imagenes/5225.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5225.htm',},
    {id:'7',title:'Mark',FKGL:'2.46',RDL2:'26.7',imagen:'/dist/front1/assets/imagenes/5111.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5111.htm',},
    {id:'8',title:'Samantha Daily',FKGL:'5.95',RDL2:'26.58',imagen:'/dist/front1/assets/imagenes/4997.webp',href:'/dist/front1/assets/lecturas/cuestionario_4997.htm',},
    {id:'9',title:'Noelle from Ireland',FKGL:'4.08',RDL2:'25.43',imagen:'/dist/front1/assets/imagenes/5392.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5392.htm',},
    {id:'10',title:'Lenas email',FKGL:'2.71',RDL2:'25.18',imagen:'/dist/front1/assets/imagenes/4969.jpg',href:'/dist/front1/assets/lecturas/cuestionario_4969.htm',},
    {id:'11',title:'Best Body Fitness',FKGL:'5.03',RDL2:'24.99',imagen:'/dist/front1/assets/imagenes/6631.jpg',href:'/dist/front1/assets/lecturas/cuestionario_6631.htm',},
    {id:'12',title:'Tired Bored',FKGL:'3.25',RDL2:'22.33',imagen:'/dist/front1/assets/imagenes/5417.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5417.htm',},
    {id:'13',title:'Professional profile summaries',FKGL:'9.16',RDL2:'21.31',imagen:'/dist/front1/assets/imagenes/6627.jpg',href:'/dist/front1/assets/lecturas/cuestionario_6627.htm',},
    {id:'14',title:'Study skill tips',FKGL:'4.99',RDL2:'21.19',imagen:'/dist/front1/assets/imagenes/6619.webp',href:'/dist/front1/assets/lecturas/cuestionario_6619.htm',},
    {id:'15',title:'Social media influencers',FKGL:'7.52',RDL2:'20.17',imagen:'/dist/front1/assets/imagenes/5574.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5574.htm',},
    {id:'16',title:'Maria Kochetkova',FKGL:'9.98',RDL2:'19.03',imagen:'/dist/front1/assets/imagenes/5139.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5139.htm',},
    {id:'17',title:'My neighborhood',FKGL:'7.87',RDL2:'18.76',imagen:'/dist/front1/assets/imagenes/5004.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5004.htm',},
    {id:'18',title:'Meals in Britian',FKGL:'4.65',RDL2:'18.31',imagen:'/dist/front1/assets/imagenes/5108.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5108.htm',},
    {id:'19',title:'World Markeers',FKGL:'6.17',RDL2:'16.39',imagen:'/dist/front1/assets/imagenes/5000.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5000.htm',},
    {id:'20',title:'Jennifer Lopez',FKGL:'6.68',RDL2:'14.54',imagen:'/dist/front1/assets/imagenes/4410.jpg',href:'/dist/front1/assets/lecturas/cuestionario_4410.htm',},
    {id:'21',title:'Dear Cole',FKGL:'2.7',RDL2:'13.73',imagen:'/dist/front1/assets/imagenes/5235.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5235.htm',},
    {id:'22',title:'Alex travels',FKGL:'14.75',RDL2:'5.23',imagen:'/dist/front1/assets/imagenes/5320.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5320.htm',},
    {id:'23',title:'Halle Barry',FKGL:'8.98',RDL2:'2.44',imagen:'/dist/front1/assets/imagenes/5158.jpg',href:'/dist/front1/assets/lecturas/cuestionario_5158.htm',},
  ]
  constructor(private http: HttpClient) { }

  getAllLecturas(){
    return this.lecturas;
  }

  getLectura(id:string){
    return this.lecturas.find(item=> id === item.id)
  }

  getAvance():Observable<any> {
    return this.http.get(`${this.url}getavance.php?`, {responseType:'text'});
  }
}
