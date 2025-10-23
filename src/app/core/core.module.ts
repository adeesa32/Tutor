import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LibroSService} from './service/libros/libro-s.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LibroSService
  ]
})
export class CoreModule { }
