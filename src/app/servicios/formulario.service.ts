import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  backend = environment.backend + "/registroform"

  constructor( private http:HttpClient) { }

  registrarFormulario(datos_formulario) {
    return this.http.post(`${this.backend}/crear-registro`,datos_formulario);

  }
  
  obtenerDatosFormulario(){
    return this.http.get(`${this.backend}/obtener-registros`)
  }
}
