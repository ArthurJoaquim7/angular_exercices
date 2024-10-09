import { Injectable } from '@angular/core';

import { Carros } from 'src/Carros';

// =========== REQUISIÇÕES HTTP IMPORTS
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  remove(carros: Carros[], carro: Carros) {
    return carros.filter((a) => carro.name !== a.name)
  }
  // =========== REQUISIÇÕES HTTP
  private apiUrl = 'http://localhost:3000/carros'

  getAll(): Observable<Carros[]> { // OBSERVA SE O ARRAY DE CARROS CHEGA NA REQUISIÇÃO DA API
    return this.http.get<Carros[]>(this.apiUrl);
  }
}

