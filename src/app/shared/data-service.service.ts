import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  search(url:string, data: any) {
    return this.http.post<any>(url, data);
  }
  findById(url:string,id:string,){
    return this.http.get<any>(url+'/'+id);
  }

  save(url:string,data:any){
    return this.http.post<any>(url, data);
  }

  update(url:string,data:any){
    return this.http.put<any>(url, data);
  }

  delete(url:string,id:string){
    url
    return this.http.delete<any>(url+'/'+id);
  }

}
