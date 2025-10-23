import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Lectura} from 'src/app/core/models/lectura.model';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css']
})
export class LecturaComponent implements OnInit {

  @Input() lectura: Lectura;
  @Output() lecturaClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor() {
    console.log('constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
  }
  addCart(): void {
    console.log('lectura por leer');
    this.lecturaClicked.emit(this.lectura.id);
  }


}
