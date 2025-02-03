import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogocardComponent } from '../logocard/logocard.component';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'componenteCarrusel',
  standalone: true,
  imports: [CommonModule, LogocardComponent],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
})
export class CarruselComponent implements OnInit {
  tecnologias: any;
  baseUrl: string = `${environment.APIURL}/images/`;

  constructor(private apiService: ApiService) {}

  // Inicializa tecnologias cogiendo los datos de la api
  ngOnInit(): void {
    this.apiService.getTecnologias().subscribe((data) => {
      this.tecnologias = data;
      this.loadScript();
    });
  }

  loadScript() {
    const script = document.createElement('script');
    script.src = 'assets/carrusel.js';
    document.body.appendChild(script);
  }
}
