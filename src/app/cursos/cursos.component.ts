import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent {
  nomePortal: string = "";

  cursos: string[] = [];


  constructor(private readonly cursoService: CursosService)
  {}

  setPortalName(name : string) {
    if(!(name.trim().length > 0)) return;

    this.nomePortal = name;
  }

  getCursos() {
    this.cursos = this.cursoService.getCursos();
  }

}
