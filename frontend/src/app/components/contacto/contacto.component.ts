import { Component } from '@angular/core';
import { BotonComponent } from '../boton/boton.component';

@Component({
  selector: 'componenteContacto',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {}
