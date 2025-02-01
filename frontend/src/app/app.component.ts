import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from './components/boton/boton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
