import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { PaisesListadoComponent } from './components/paises-listado/paises-listado.component';


const routes: Routes = [
  {path: 'Bienvenido', component: BienvenidoComponent },
  {path: 'busqueda', component: BusquedaComponent },
  {path: 'peliculas/alta', component: PeliculaAltaComponent },
  {path: 'actor/alta', component: ActorAltaComponent },
  {path: 'actor/listado', component: ActorListadoComponent },
  {path: 'peliculas/listado', component: PeliculasListadoComponent },
  {path: 'paises/listado', component: PaisesListadoComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'Bienvenido'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
