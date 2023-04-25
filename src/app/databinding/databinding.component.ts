import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.sass']
})
export class DatabindingComponent {
  url: string = 'http:loaine.training'
  urlImagem: string = 'http://lorempixel.com.br/500/400/'
  getValor() {
    return 1;
  }
}
