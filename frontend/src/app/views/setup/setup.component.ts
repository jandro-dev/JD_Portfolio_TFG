import { Component } from '@angular/core';
import { CategoriasSetupComponent } from '../../components/categorias-setup/categorias-setup.component';

@Component({
  selector: 'vistaSetup',
  standalone: true,
  imports: [CategoriasSetupComponent],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css',
})
export class SetupComponent {}
