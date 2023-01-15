import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillURL = 'https://new-crook-production.up.railway.app/habilidades/';

  constructor(private httpClient: HttpClient) { }

  public listahab(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillURL + 'listahab');
  }

  public detailhab(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillURL + `detailhab/${id}`);
  }

  public detailnombrehab(nombre: string): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillURL + `detailnombrehab/${nombre}`);
  }

  public save(skill: Skills): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'createhab', skill);
  }


  public update(id: number, skill: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `updatehab/${id}`, skill); 
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `deletehab/${id}`);
  }

}