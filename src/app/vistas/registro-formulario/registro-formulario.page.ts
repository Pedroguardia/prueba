import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service';

export class DatosFormulario{
  constructor(
    public nombre:string,
    public apellidos:string,
    public rut:  string ,
    public correo: string,
    public password: string
  ){}
  
}

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.page.html',
  styleUrls: ['./registro-formulario.page.scss'],
})
export class RegistroFormularioPage implements OnInit {
  datos_formulario;
  constructor(private formularioService:FormularioService ) {
    this.datos_formulario = new DatosFormulario("","","","","");
   }

  ngOnInit() {
  }
  
  enviarDatos(){

    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
      (response:any)=>{
        if(response.registro){
          alert("Los datos fueron enviados correctamente!");
        }else{
          alert("Error al enviar los datos")
        }

      },
      error=>{
        alert("Error en la petición");
      }
    )

    console.log("Los datos del formulario son: ", this.datos_formulario )
  
  }

}