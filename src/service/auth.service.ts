import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/auth';

  constructor(private http:HttpClient) { }

  public login(signinReq:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, signinReq);
  }



}
