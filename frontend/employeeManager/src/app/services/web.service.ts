import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}`);
  }

  public post(url: string, obj: object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${url}`, obj);
  }
}
