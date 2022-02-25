import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pricing } from '../objects/pricing';

@Injectable({
  providedIn: 'root'
})
export class TarificationService{

  urlPricing:string="http://backend:8080/api/tarifications/";

  constructor(private http: HttpClient){}


  getPricing(id:number):Observable<Pricing>{
    return this.http.get<Pricing>(this.urlPricing+"/"+id);
  }

  updatePricing(c:Pricing,id:number):Observable<Pricing>{
    return this.http.put<Pricing>(this.urlPricing+"/"+id,c);
  }  
  
  deletePricing(id:number):Observable<Pricing>{
    return this.http.delete<Pricing>(this.urlPricing+"/"+id);
  }

  patchPricing(c:Pricing):Observable<Pricing>{
      return this.http.patch<Pricing>(this.urlPricing,c);
  }


  getAll():Observable<Pricing[]>{
    return this.http.get<Pricing[]>(this.urlPricing);
  }

  createPricing(c:Pricing):Observable<Pricing>{
    return this.http.post<Pricing>(this.urlPricing+"/create",c);
  }


}
