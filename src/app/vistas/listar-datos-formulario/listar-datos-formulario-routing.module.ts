import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDatosFormularioPage } from './listar-datos-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDatosFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDatosFormularioPageRoutingModule {}
