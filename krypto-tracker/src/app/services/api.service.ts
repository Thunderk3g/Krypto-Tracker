import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const SERVER_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get(SERVER_API + 'getdata',{
      observe: 'response',
    })
  }
}
