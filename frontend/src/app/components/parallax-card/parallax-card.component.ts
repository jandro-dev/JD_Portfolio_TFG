import { Component, Input } from '@angular/core';

@Component({
  selector: 'parallaxCard',
  standalone: true,
  imports: [],
  templateUrl: './parallax-card.component.html',
  styleUrl: './parallax-card.component.css',
})
export class ParallaxCardComponent {
  // Entradas por defecto
  @Input() url: string = 'https://jandro.pages.dev';
  @Input() titulo: string = 'Titulo';
  @Input() descripcion: string = 'Descripcion';
  @Input() imagen: string = '';
}
