import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<Employee[]> {
    return this.http.get<any>(`${environment.apiUrl}${url}`);
  }

  public post(url: string, obj: any): Observable<Employee> {
    return this.http.post<any>(`${environment.apiUrl}${url}`, obj);
  }
}
