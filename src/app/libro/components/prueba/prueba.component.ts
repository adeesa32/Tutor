import { Component, OnInit } from '@angular/core';
import {Libro} from '../../../core/models/libro.model';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

    libro: Libro[]=[
      {
        id: '1',
        imagen: 'assets/imagenes/pg160.cover.medium.jpg',
        title: 'The Awakening and Selected Short Stories',
        autor: 'Kate Chopin (service)',
        text: '/dist/front1/assets/libros/160.html'
      },
      {
        id: '2',
        imagen: 'assets/imagenes/pg512.cover.medium.jpg',
        title: 'Mosses from an Old Manse and Other Stories',
        autor: 'Nathaniel Hawthorne',
        text: '/dist/front1/assets/libros/512.html'
      },
      {
        id: '3',
        imagen: 'assets/imagenes/pg932.cover.medium.jpg',
        title: 'The Fall of the House of Usher',
        autor: 'Edgar Allan Poe',
        text: '/dist/front1/assets/libros/932.html'
      },  ]

  constructor() { }
  ngOnInit(): void {
  }

/*
  addItem(): void {
    this.items.push(this.title);
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }*/

  clickLibro(id: number): void {
    console.log('libro');
    console.log(id);
  }
}
