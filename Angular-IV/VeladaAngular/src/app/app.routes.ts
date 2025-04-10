import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: HomeComponent },
  { path: 'footer', component: HomeComponent },
  { path: 'jugador', component: JugadorComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: '**', component: PageNotFoundComponent}
];
