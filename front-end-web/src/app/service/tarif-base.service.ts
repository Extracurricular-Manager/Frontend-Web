import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../objects/price';

@Injectable({
  providedIn: 'root'
})
export class TarifBaseService {

  urlPrice:string="http://backend:8080/api/tarif-bases/";

  constructor(private http: HttpClient) { }

  getPrice(id:number):Observable<Price>{
    return this.http.get<Price>(this.urlPrice+"/"+id);
  }

  updatePrice(c:Price,id:number):Observable<Price>{
    return this.http.put<Price>(this.urlPrice+"/"+id,c);
  }  
  
  deletePrice(id:number):Observable<Price>{
    return this.http.delete<Price>(this.urlPrice+"/"+id);
  }

  patchPrice(c:Price):Observable<Price>{
      return this.http.patch<Price>(this.urlPrice,c);
  }


  getAll():Observable<Price[]>{
    return this.http.get<Price[]>(this.urlPrice);
  }

  createPrice(c:Price):Observable<Price>{
    return this.http.post<Price>(this.urlPrice+"/create",c);
  }

}
