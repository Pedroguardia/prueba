import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service';

@Component({
  selector: 'app-listar-datos-formulario',
  templateUrl: './listar-datos-formulario.page.html',
  styleUrls: ['./listar-datos-formulario.page.scss'],
})
export class ListarDatosFormularioPage implements OnInit {

  constructor(private formularioService:FormularioService ) { }
  datos_formularios;
  
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerDatosFormulario();
  }

  obtenerDatosFormulario(){
    this.formularioService.obtenerDatosFormulario().subscribe(
      (response:any) => {
        this.datos_formularios = response.registros;
        console.log(this.datos_formularios)
      },
      error => {
        alert("hay errores");
      }        
    );

}
 }
