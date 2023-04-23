import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalesComponent } from './curso-detales/curso-detales.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CursosComponent
  ]
})
export class CursosModule { }
