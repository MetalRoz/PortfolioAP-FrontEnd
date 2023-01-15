import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Aboutme } from '../models/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutmeURL = 'https://new-crook-production.up.railway.app/aboutme/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Aboutme[]> {
    return this.httpClient.get<Aboutme[]>(this.aboutmeURL + 'lista');
  }

  public detail(id: number): Observable<Aboutme> {
    return this.httpClient.get<Aboutme>(this.aboutmeURL + `detail/${id}`);
  }

  public update(id: number, aboutme: Aboutme): Observable<any> {
    return this.httpClient.put<any>(this.aboutmeURL + `update/${id}`, aboutme); 
  }
}
