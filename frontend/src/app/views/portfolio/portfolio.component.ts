import { Component, OnInit } from '@angular/core';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { ParallaxCardComponent } from '../../components/parallax-card/parallax-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { environments } from '../../../environments/environment';

@Component({
  selector: 'vistaPortfolio',
  standalone: true,
  imports: [ContactoComponent, ParallaxCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  proyectos: any;
  disenios: any;
  baseUrl: string = `${environments.baseUrl}/images/`;

  constructor(private apiService: ApiService) {}

  // Inicializa portfolio y disenios cogiendo los datos de la api
  ngOnInit(): void {
    this.apiService.getProyectos().subscribe((data) => {
      this.proyectos = data;
    });
    this.apiService.getDisenios().subscribe((data) => {
      this.disenios = data;
    });
  }
}
