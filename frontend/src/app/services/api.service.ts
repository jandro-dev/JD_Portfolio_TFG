import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Consumicion de la api de springboot
  private url = `${environments.baseUrl}/api`;

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
