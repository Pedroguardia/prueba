import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFormularioPageRoutingModule } from './registro-formulario-routing.module';

import { RegistroFormularioPage } from './registro-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFormularioPageRoutingModule
  ],
  declarations: [RegistroFormularioPage]
})
export class RegistroFormularioPageModule {}
