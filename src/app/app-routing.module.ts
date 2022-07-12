import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `drivers`, loadChildren: () =>
      import('./@pages/drivers/drivers.module').then(m => m.DriversModule)
  },
  {
    path: `seasons`, loadChildren: () =>
      import('./@pages/seasons/seasons.module').then(m => m.SeasonsModule)
  },
  {
    path: `circuits`, loadChildren: () =>
      import('./@pages/circuits/circuits.module').then(m => m.CircuitsModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // <== añadir use hash
  // Añadimos el literal {useHash: true} esto añadirá un # a la ruta, que es un viejo truco de los navegadores para evitar que el navegador recargue la pagina.
  exports: [RouterModule]
})
export class AppRoutingModule { }
