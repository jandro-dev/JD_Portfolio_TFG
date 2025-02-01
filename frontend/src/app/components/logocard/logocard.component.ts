import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'componenteLogoCard',
  standalone: true,
  imports: [],
  templateUrl: './logocard.component.html',
  styleUrl: './logocard.component.css',
})
export class LogocardComponent implements OnInit {
  // Entradas por defecto
  @Input() urlImagen: string = '';
  @Input() bgColor: string = '#000';
  @Input() anios: number = 0;
  @Input() meses: number = 0;

  // Variables
  mensaje: string = '';
  isHover: boolean = false;

  ngOnInit() {
    switch (true) {
      case this.anios > 1:
        this.mensaje = `${this.anios} años de experiencia`;
        break;
      case this.anios === 1:
        this.mensaje = `${this.anios} año de experiencia`;
        break;
      case this.meses === 1:
        this.mensaje = `${this.meses} mes de experiencia`;
        break;
      case this.meses > 0 && this.anios === 0:
        this.mensaje = `${this.meses} meses de experiencia`;
        break;
      default:
        this.mensaje = 'No hay experiencia';
        break;
    }
  }

  entradaHover() {
    this.isHover = true;
  }

  salidaHover() {
    this.isHover = false;
  }
}