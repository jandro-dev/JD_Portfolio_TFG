import { Component } from '@angular/core';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { BotonComponent } from '../../components/boton/boton.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';

@Component({
  selector: 'vistaSobreMi',
  standalone: true,
  imports: [ContactoComponent, BotonComponent, SkillCardComponent],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css',
})
export class SobremiComponent {}
