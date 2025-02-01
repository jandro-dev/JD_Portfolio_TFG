import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'componenteSkillCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {

  // Entradas por defecto
  @Input() urlImagen: string = '';
  @Input() bgColor: string = 'black';
  @Input() habilidad: string = '';
  @Input() tecnologias: string[] = [];
  
}
