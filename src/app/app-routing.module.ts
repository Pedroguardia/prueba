import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./vistas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-formulario',
    loadChildren: () => import('./vistas/registro-formulario/registro-formulario.module').then( m => m.RegistroFormularioPageModule)
  },
  {
    path: 'listar-datos-formulario',
    loadChildren: () => import('./vistas/listar-datos-formulario/listar-datos-formulario.module').then( m => m.ListarDatosFormularioPageModule)
  },
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
