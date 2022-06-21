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

    return this.http.post<Escuela>(this.api+"/escuela/registrar",escuela,{headers: this.httpHeaders})
  }

  eliminarEscuela(id:number): Observable<Escuela>{
    return this.http.delete<Escuela>(this.api+"/escuela/eliminar/"+id,{headers: this.httpHeaders})
  }
}
