import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  private url = 'http://localhost:8080/auto'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + '/getAll')
  }

  add(auto: Auto): Observable<any> {
    return this.http.post(this.url, auto)
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + "/" + id + '/delete', null)
}
  update(auto: Auto): Observable<any> {
    return this.http.post(this.url + "/" + auto.auto_id + "/update", auto)
  }
}