import { Injectable } from '@angular/core';

import { Carros } from 'src/Carros';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  remove(carros: Carros[], carro: Carros) {
    return carros.filter((a) => carro.name !== a.name)
  }
}

