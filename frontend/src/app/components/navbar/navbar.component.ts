import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'componenteNavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuMovil = true;

  // Renderer manipula el DOM de forma segura
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.cambiarNavbar();
  }

  // Añade clase scrolled a etiqueta navbar si la ventana se ha scrolleado verticalmente > 10px
  cambiarNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }
  }

  // Evento para saber cuando se scrollea la pantalla
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.cambiarNavbar();
  }

  // Funcion para entrada / salida menu movil
  alternarMenu() {
    this.isMenuMovil = !this.isMenuMovil;
  }
}
