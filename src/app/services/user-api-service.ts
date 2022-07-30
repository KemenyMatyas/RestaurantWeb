import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private httpClient: HttpClient) { }

  url = "https://localhost:44307"

  login(user: string): Observable<any> {
    return  this.httpClient.post<ApiResponse>(`${this.url}/api/User/login`, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

  register(user: string): Observable<any> {
    return  this.httpClient.post<ApiResponse>(`${this.url}/api/User/register`, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

}
