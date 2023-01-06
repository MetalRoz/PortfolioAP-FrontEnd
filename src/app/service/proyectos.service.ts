import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = 'https://spotless-ants-production.up.railway.app/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public listapro(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proyectosURL + 'listapro');
  }

  public detailpro(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.proyectosURL + `detailpro/${id}`);
  }

  public detailtitulopro(nombre: string): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.proyectosURL + `detailtitulopro/${nombre}`);
  }

  public save(proyecto: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.proyectosURL + 'createpro', proyecto);
  }


  public update(id: number, proyecto: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.proyectosURL + `updatepro/${id}`, proyecto); 
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectosURL + `deletepro/${id}`);
  }

}

