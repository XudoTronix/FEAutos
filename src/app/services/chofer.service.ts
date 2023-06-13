import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chofer } from '../models/chofer';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  private url = 'http://localhost:8080/chofer'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url + '/getAll')
  }

  add(chofer: Chofer): Observable<any> {
    return this.http.post(this.url, chofer)
  }

  delete(id: number): Observable<any> {
    return this.http.post(this.url + '/' + id + '/delete', null)
  }

  update(chofer: Chofer): Observable<any> {
    return this.http.post(this.url + '/' + chofer.chofer_id + '/update', chofer) 
  }
}
