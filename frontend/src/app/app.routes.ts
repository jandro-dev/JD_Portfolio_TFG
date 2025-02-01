import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { SobremiComponent } from './views/sobremi/sobremi.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { SetupComponent } from './views/setup/setup.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { ContactoComponent } from './views/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'jandrodev',
    component: SobremiComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'setup',
    component: SetupComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
];
