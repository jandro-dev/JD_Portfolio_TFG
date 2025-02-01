import { Component, Input } from '@angular/core';

@Component({
  selector: 'componenteBoton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  // Entradas por defecto
  @Input() texto: string = 'Boton';
  @Input() colorBoton: string = '#000';
  @Input() colorHover: string = '#fff';
  @Input() url: string = '';

  isHover: boolean = false;

  entradaHover() {
    this.isHover = true;
  }

  salidaHover() {
    this.isHover = false;
  }
}
