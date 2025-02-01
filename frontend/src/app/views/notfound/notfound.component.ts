import { Component } from '@angular/core';
import { BotonComponent } from '../../components/boton/boton.component';

@Component({
  selector: 'vistaNotFound',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {}
