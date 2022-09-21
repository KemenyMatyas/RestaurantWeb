import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiResponse, ApiResponseList} from "../models/ApiResponse";
import {Category} from "../models/Category";
import {MenuItem} from "../models/MenuItem";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  url = "https://localhost:44307/api/Home/"

  GetMenuItems(): Observable<ApiResponseList<MenuItem>> {
    return  this.httpClient.get<ApiResponseList<MenuItem>>(`${this.url}getMenuItems`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

  GetMenuItemsPagination(params: HttpParams): Observable<ApiResponseList<MenuItem>> {
    return  this.httpClient.get<ApiResponseList<MenuItem>>(`${this.url}getMenuItemsPaginationFilter`,{
      params,
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

  GetCategories(): Observable<ApiResponseList<Category>> {
    return  this.httpClient.get<ApiResponseList<Category>>(`${this.url}getCategories`,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  };

}
