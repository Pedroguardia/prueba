import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service';

@Component({
  selector: 'app-listar-datos-formulario',
  templateUrl: './listar-datos-formulario.page.html',
  styleUrls: ['./listar-datos-formulario.page.scss'],
})
export class ListarDatosFormularioPage implements OnInit {

  constructor(private formularioService:FormularioService ) { }
  datos_formulario;
  
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this.formularioService.obtenerUsuario().subscribe(
      (response:any) => {
        this.datos_formulario = response.usuarios;
       
      },
      error => {
        alert("Error peticion");
      }        
    );

}
 }
