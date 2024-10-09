import { Component } from '@angular/core';
import { Carros } from 'src/Carros';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent {
  paiAloc: string;

  constructor(private testService: TestService) {
    this.paiAloc = '';
  }

  handlePai(dadoAlvo: string) {
    this.paiAloc = dadoAlvo;
  }


  // SERVICES
  removeCarro(carro: Carros) {
    this.carros = this.testService.remove(this.carros, carro)
  }


  // TWO WAY DATA BINDING
  inputEx = '';

  // RENDERIZAÇÃO DE LISTA
  carros: Carros[] = [
    { name: "BMW", age: 2019, color: "Branco" },
    { name: "Mercedes", age: 2012, color: "Preto" },
    { name: "Honda", age: 2020, color: "Prata" },
  ];
  colorDetail = '';
  handleColor(carros: Carros) {
    this.colorDetail = `O carro: ${carros.name} tem a cor: ${carros.color}`;
  }
}
