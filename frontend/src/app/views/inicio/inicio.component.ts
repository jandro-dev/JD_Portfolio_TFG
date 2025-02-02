import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BotonComponent } from '../../components/boton/boton.component';
import { LogocardComponent } from '../../components/logocard/logocard.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';

@Component({
  selector: 'vistaInicio',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    BotonComponent,
    LogocardComponent,
    CarruselComponent,
    ContactoComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  // Variables
  titulo: string = 'Aplicaciones android';
  textoSkill: string =
    'Hago aplicaciones para los sistemas operativos de Google. Creo apps en Android para móviles usando Kotlin y Jetpack Compose.';
  textos: string[] = [
    'Mi nombre es Alejandro Franco',
    'Soy desarrollador full stack',
    'creo aplicaciones',
    'moviles | web',
    'y diseño logotipos',
  ];
  part: string = '';
  i: number = 0;
  desplazamiento: number = 0;
  sizeTextos: number = this.textos.length;
  avanzar: boolean = true;
  skip_count: number = 0;
  skip_delay: number = 15;
  velAnimacion: number = 60;

  constructor(private referencia: ElementRef) {}

  // Inicializaciones
  ngOnInit(): void {
    this.actualizarTextoAnimado();

    // Cambia la informacion segun la opcion escogida
    document.addEventListener('DOMContentLoaded', () => {
      let opcionHabilidad = document.querySelectorAll('.opcion');
      let imagen = document.querySelector('.cambiarImg') as HTMLImageElement;
      let icono = document.querySelector('.cambiarSkill') as HTMLImageElement;

      // Precargar imágenes
      const imagenesPrecargadas = [
        'assets/skills/app.webp',
        'assets/skills/web.webp',
        'assets/skills/design.webp',
        'assets/skills/appSkill.svg',
        'assets/skills/webSkill.svg',
        'assets/skills/designSkill.svg',
      ];

      imagenesPrecargadas.forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      // Evento para cambiar la imagen al hacer clic
      opcionHabilidad.forEach((div) => {
        div.addEventListener('click', () => {
          // Eliminar la clase 'clicked' de todos los elementos
          opcionHabilidad.forEach((element) => {
            element.classList.remove('clicked');
          });

          // Agregar la clase 'clicked' al elemento clickeado
          div.classList.add('clicked');

          const linkText = div.querySelector('span')?.textContent?.trim();

          // Modifica el contenido segun la opcion elegida
          switch (linkText) {
            case 'App':
              this.titulo = 'Aplicaciones android';
              this.textoSkill =
                'Hago aplicaciones para los sistemas operativos de Google. Creo apps en Android para móviles usando Kotlin y Jetpack Compose.';
              imagen.src = imagenesPrecargadas[0];
              icono.src = imagenesPrecargadas[3];
              break;

            case 'Web':
              this.titulo = 'Páginas web y backend';
              this.textoSkill =
                'Desarrollo y mantengo páginas web con Angular y NodeJS. También creo Back-End utilizando Spring MVC y MySQL.';
              imagen.src = imagenesPrecargadas[1];
              icono.src = imagenesPrecargadas[4];
              break;

            case 'Diseño':
              this.titulo = 'Diseño gráfico';
              this.textoSkill =
                'Realizo marcas y logotipos usando Photoshop. El diseño lo aplico además en aplicaciones móviles y páginas web utilizando Figma.';
              imagen.src = imagenesPrecargadas[2];
              icono.src = imagenesPrecargadas[5];
              break;

            default:
              this.titulo = '';
              this.textoSkill = '';
              imagen.src = '';
              icono.src = '';
              break;
          }
        });
      });
    });
  }

  // Escritura en movimiento: https://ideakreativa.net/efectos-de-animacion-de-texto-css-ejemplos/
  actualizarTextoAnimado(): void {
    setInterval(() => {
      // Comprueba si la animacion continua hacia delante
      if (this.avanzar) {
        // Si ha terminado el texto suma un contador para esperar a borrar el texto
        if (this.desplazamiento >= this.textos[this.i].length) {
          this.skip_count++;
          if (this.skip_count === this.skip_delay) {
            this.avanzar = false;
            this.skip_count = 0;
          }
        }

        /* La animacion va hacia atras ya que el contador de saltos ahora es 0 y 
        cuando el desplazamiento sea 0 coge el siguiente texto del array */
      } else {
        if (this.desplazamiento === 0) {
          this.avanzar = true;
          this.i++;

          // Reinicio del array cuando lo termina
          if (this.i >= this.sizeTextos) {
            this.i = 0;
          }
        }
      }

      // Coge el texto desde el primer caracter hasta donde este el desplazamiento
      this.part = this.textos[this.i].substring(0, this.desplazamiento);

      /* Si los saltos son 0 y la animacion es adelante incrementa 
          el indice de desplazamiento sino lo disminuye */
      if (this.skip_count === 0) {
        if (this.avanzar) {
          this.desplazamiento++;
        } else {
          this.desplazamiento--;
        }
      }

      // Actualiza la clase texto con lo que hay en part
      const wordElement = document.querySelector('.textoAnimado');
      if (wordElement) {
        wordElement.textContent = this.part;
      }
    }, this.velAnimacion);
  }

  // Funcion para redireccionar al id perfil sin fijarlo en la url
  scrollToPerfil(event: Event) {
    event.preventDefault();
    const perfilElement =
      this.referencia.nativeElement.querySelector('#perfil');
    if (perfilElement) {
      perfilElement.scrollIntoView({ block: 'start' });
    }
  }

  // Funcion para enlace en componente boton
  abrirNuevaVentana(event: Event, url: string) {
    event.preventDefault();
    window.open(url, '_blank');
  }
}
