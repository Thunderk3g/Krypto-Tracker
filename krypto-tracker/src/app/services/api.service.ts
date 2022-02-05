import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

const SERVER_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


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
  getcoinData(uuid: any) : Observable<any> {
    return this.http.post(SERVER_API + 'getcoinData',{
      uuid : uuid
    })
  }
  register(user : any): Observable<any> {
    return this.http.post(SERVER_API + 'signup', {
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber
    }, httpOptions);
  }
  login(credentials : any ): Observable<any> {

    return this.http.post(SERVER_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
}
