import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  api = URL_SERVICIOS;

  constructor(private http:HttpClient) { }

  listarEscuelas(): Observable<any>{
    return this.http.get<any>(this.api+"/escuela/lista")
  }
}
