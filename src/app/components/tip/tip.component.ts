import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  //@Input() estrategia: Estrategia;
  @Output() estrategiaClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addCart(): void {
   // console.log('Ver estrategia');
   // this.estrategiaClicked.emit(this.estrategia.id);
  }
}
