import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import {HttpClient} from '@angular/common/http'
import { URL_SERVICIOS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  api = URL_SERVICIOS

  constructor(
    private http:HttpClient,
  ) { }

  getEstudianteByEscuela(idescuela=3): Observable<any>{
    return this.http.get<any>(this.api+"/estudiante/lista?idescuela="+idescuela)
  }
}
