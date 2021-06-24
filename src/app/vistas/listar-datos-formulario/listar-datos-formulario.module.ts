import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDatosFormularioPageRoutingModule } from './listar-datos-formulario-routing.module';

import { ListarDatosFormularioPage } from './listar-datos-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDatosFormularioPageRoutingModule
  ],
  declarations: [ListarDatosFormularioPage]
})
export class ListarDatosFormularioPageModule {}
