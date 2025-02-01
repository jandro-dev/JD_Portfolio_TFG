import { Component } from '@angular/core';
import { BotonComponent } from '../../components/boton/boton.component';

@Component({
  selector: 'vistaContacto',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  // Funcion para redireccionar al id seccionContacto sin fijarlo en la url
  scrollToContacto(event: Event) {
    event.preventDefault();
    const sectionContacto = document.querySelector('#seccionContacto');
    if (sectionContacto) {
      sectionContacto.scrollIntoView({ block: 'start' });
    }
  }
}
