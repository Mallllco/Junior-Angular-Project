import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'ListaCorsi',
    loadChildren: () =>
      import('./components/lista-corsi/lista-corsi.module').then(
        (module) => module.ListaCorsiModule
      ),
  },
  {
    path: 'HomePage',
    loadChildren: () =>
      import('./components/home-page/home-page.module').then(
        (module) => module.HomePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
