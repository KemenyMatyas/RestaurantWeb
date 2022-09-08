import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private httpClient: HttpClient) { }

  url = "https://localhost:44307/api/User/"

  Login(user: string): Observable<any> {
    return  this.httpClient.post<ApiResponse>(`${this.url}login`, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

  Register(user: string): Observable<any> {
    return  this.httpClient.post<ApiResponse>(`${this.url}register`, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

}
