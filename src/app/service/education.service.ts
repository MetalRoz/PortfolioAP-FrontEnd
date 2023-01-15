import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationURL = 'https://new-crook-production.up.railway.app/educacion/';

  constructor(private httpClient: HttpClient) { }

  public listaedu(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.educationURL + 'listaedu');
  }

  public detailedu(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.educationURL + `detailedu/${id}`);
  }

  public detailtituloexp(titulo: string): Observable<Education> {
    return this.httpClient.get<Education>(this.educationURL + `detailtituloedu/${titulo}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.educationURL + 'createedu', education);
  }


  public update(id: number, education: Education): Observable<any> {
    return this.httpClient.put<any>(this.educationURL + `updateedu/${id}`, education); 
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educationURL + `deleteedu/${id}`);
  }

}