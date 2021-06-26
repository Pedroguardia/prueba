import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  backend = environment.backend + "/usuario"

  constructor( private http:HttpClient) { }

  registrarFormulario(dato_formulario) {
    return this.http.post(`${this.backend}/crear-usuario`,dato_formulario);

  }
  
  obtenerUsuario(){
    return this.http.get(`${this.backend}/obtener-usuarios`)
  }

  crearEgreso(){
    return this.http.get(`${this.backend}/crear-egreso`)
  }
}
