import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { EstrategiaService } from 'src/app/core/service/estrategia.service';
import { Estrategia} from 'src/app/core/models/estrategia.model'

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css']
})
export class EstrategiasComponent implements OnInit {

  //@Input() estrategia: Estrategia;
  @Output() estrategiaClicked: EventEmitter<any> = new EventEmitter();
  articulo: any;
  //selectedEstrategia=this.estrategia;
  /*estrategia={
    id:0,
    title:"titulo",
    text:"vacío"
  }*/
  estrategia: Estrategia[]

  constructor(private estrategiasService: EstrategiaService) { }

  ngOnInit() {
        this.getAllEstrategias();
  }

  getAllEstrategias(){
    this.estrategia=this.estrategiasService.getAllEstrategias();//.subscribe((result:any)=>this.articulo=result);
  }
  getEstrategia(id:number) {
   // this.EstrategiasService.getEstrategia(id).subscribe((articulo:any)=>this.estrategia=articulo[0]);
   this.estrategiaClicked.emit(this.estrategia)
  }

  clickestrategia(id:number) {
    console.log(id);
    //this.estrategia=this.estrategiasService.getEstrategia(id);
  }
  baja(){}
  seleccionar(){}
}
