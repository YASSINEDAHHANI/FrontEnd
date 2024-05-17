import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../app/Models/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {
       private baseUrl = 'http://localhost:8082/api/users';
       constructor(private http: HttpClient){}
       getAllUsers():Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
       }
       

}