import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.component';
import { CommonModule } from '@angular/common';
import { LogocardComponent } from '../logocard/logocard.component';

@Component({
  selector: 'componenteCarrusel',
  standalone: true,
  imports: [CommonModule, LogocardComponent],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
})
export class CarruselComponent implements OnInit {
  tecnologias: any;

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
