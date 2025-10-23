import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Libro} from '../../../core/models/libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit, OnChanges {

  @Input() libro: Libro;
  @Output() libroClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  addCart(): void {
    console.log('Agregar a libros por leer');
    this.libroClicked.emit(this.libro.id);
  }


}
