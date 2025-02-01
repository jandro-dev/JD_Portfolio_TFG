import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiComponent {
  // Consumicion de la api de springboot
  private url = 'https://localhost:9325/api';

  constructor(private http: HttpClient) {}

  getTecnologias(): Observable<any> {
    return this.http.get<any>(`${this.url}/tecnologias`);
  }

  getDisenios(): Observable<any> {
    return this.http.get<any>(`${this.url}/diseños`);
  }

  getProyectos(): Observable<any> {
    return this.http.get<any>(`${this.url}/proyectos`);
  }

  getSetup(): Observable<any> {
    return this.http.get<any>(`${this.url}/setup`);
  }
}
