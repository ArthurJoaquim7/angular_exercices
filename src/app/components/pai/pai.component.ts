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
    this.getCarros();
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
  carros: Carros[] = [];

  colorDetail = '';
  handleColor(carros: Carros) {
    this.colorDetail = `O carro: ${carros.name} tem a cor: ${carros.color}`;
  }

  // =========== REQUISIÇÕES HTTP
  getCarros(): void {
    this.testService.getAll().subscribe((carros) => (this.carros = carros));;
  } // ACESSA O listService e no getAll chama os dados

}
