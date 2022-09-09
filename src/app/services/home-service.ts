import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiResponse} from "../models/ApiResponse";
import {PaginationFilter} from "../models/PaginationFilter";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  url = "https://localhost:44307/api/Home/"

  GetMenuItems(): Observable<ApiResponse> {
    return  this.httpClient.get<ApiResponse>(`${this.url}getMenuItems`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

  GetMenuItemsPagination(params: HttpParams): Observable<ApiResponse> {
    return  this.httpClient.get<ApiResponse>(`${this.url}getMenuItemsPaginationFilter`,{
      params,
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };



}
