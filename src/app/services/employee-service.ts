import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:44307"


  UploadImage(inpudata:any){
    return this.httpClient.post<ApiResponse>(`${this.url}/api/employee`,inpudata,{
      reportProgress:true,
      observe:'events'
    });
  }
  RemoveImage(code:any){
    return this.httpClient.get<ApiResponse>("https://localhost:44308/api/Product/RemoveImage/"+code);
  }

}
