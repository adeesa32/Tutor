import { Injectable } from '@angular/core';
import {Estrategia} from '../models/estrategia.model';

@Injectable({
  providedIn: 'root'
})
export class EstrategiaService {
  estrategias: Estrategia[]=[
    {id:1,title:"Leer en inglés",text:'No es lo mismo leer en español que en inglés, para que seas capaz de leer en otro idioma aplica las estrategias que se te presentan en este tutorial, poco a poco notarás los avances',},
    {id:2,title:'Temas variados',text:'Elige textos de diferentes temas y tipos aunque no los conozcas a profundidad, esto te permitirá familiarizarte con diferentes estilos y enriquecer tu vocabulario',},
    {id:3,title:'Lee con frecuencia',text:'Lee todos los días, usa tu teléfono para seguir redes sociales en inglés, periodicos, recetas, entre otros. Unos minutos al día harán que te acostumbres a pensar en inglés',},
    {id:4,title:'Inicia de forma amena',text:'Elige textos sencillos al principio, hay varias editoriales que ofrecen libros por nivel, también hay páginas web que tienen material clasificado por nivel',},
    {id:5,title:'Skimming',text:'Consiste en revisar superficialmente el texto para tener una idea de que trata, lee los títulos, observa las imagenes, lee las primeras y ultimas lineas y trata de imaginar ¿qué tipo de texto es?¿de qué trata?',},
    {id:6,title:'Scanning',text:'Revisa el texto rápidamente tratando de encontrar información, es útil para contestar las preguntas',},
    {id:7,title:'Vocabulario por contexto',text:'Es normal encontrar vocabulario desconocido, aunque no conozcas el significado de todas las palabras puedes contestar las preguntas, intenta comprender por el contexto',},
    {id:8,title:'Diccionario de apoyo',text:'Al terminar la lectura, busca las palabras en un diccionario y anotalas, en línea hay diccionarios monolingües y bilingües que pueden apoyarte',},
    {id:9,title:'No traduzcas',text:'Trata de no traducir a tu idioma mientras lees, debes acostumbrarte a pensar en inglés. Trata de formar una idea de lo que lees',},
    {id:10,title:'Crea un cuaderno de vocabulario',text:'Consigue una libreta pequeña, de bolsillo, donde puedas ir anotando el vocabulario nuevo, repasala frecuentmente',},
  ]
  //https://www.examenes-cambridge.com/examenes-cambridge/consejos-mejorar-lectura-ingles
  constructor() { }

  getAllEstrategias(){
    return this.estrategias;
  }

  getEstrategia(id:number){
    return this.estrategias.find(item=> id === item.id)
  }
}
