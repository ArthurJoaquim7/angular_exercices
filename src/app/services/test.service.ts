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


  // =========== REQUISIÇÕES HTTP
  private apiUrl = 'http://localhost:3000/carros'

  getAll(): Observable<Carros[]> { // OBSERVA SE O ARRAY DE CARROS CHEGA NA REQUISIÇÃO DA API
    return this.http.get<Carros[]>(this.apiUrl);
  }

  // =========== DYNAMIC ROUTES
  getItem(id: number): Observable<Carros> {
    return this.http.get<Carros>(`${this.apiUrl}/${id}`);
  }

  remove(id: number) {
    return this.http.delete<Carros>(`${this.apiUrl}/${id}`)
  }

}

