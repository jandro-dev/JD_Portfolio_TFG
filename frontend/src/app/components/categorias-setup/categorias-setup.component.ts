import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environments } from '../../../environments/environments';

@Component({
  selector: 'categoriasSetup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias-setup.component.html',
  styleUrl: './categorias-setup.component.css',
})

export class CategoriasSetupComponent implements OnInit {
  categorias: any;
  baseUrl: string = `${environments.baseUrl}/images/`;

  constructor(private apiService: ApiService) {}

  // Inicializa categorias cogiendo los datos de la api
  ngOnInit(): void {
    this.apiService.getSetup().subscribe((data) => {
      this.categorias = data;
    });
  }

  tieneCaracteristicas(componente: any): boolean {
    return (
      componente.caracteristicas !== null &&
      componente.caracteristicas !== undefined
    );
  }
}