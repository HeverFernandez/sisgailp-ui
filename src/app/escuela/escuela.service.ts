import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Escuela } from './Escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  api = URL_SERVICIOS;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  listarEscuelas(): Observable<any>{
    return this.http.get<any>(this.api+"/escuela/lista")
  }

  registrarEscuela(escuela: Escuela): Observable<any>{
    console.log(escuela);
    //----- Para que el registro sea exitoso, el unico cambio que falto es castear al tipo Escuela despues del: this.http.post----
    //return this.http.post<Escuela>(this.api+"/escuela/registrar",escuela,{headers: this.httpHeaders})

    return this.http.post<Escuela>(this.api+"/escuela/registrar",escuela,{headers: this.httpHeaders})
  }
}
