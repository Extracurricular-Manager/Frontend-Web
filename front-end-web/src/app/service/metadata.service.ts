import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Metadata } from '../objects/metadata';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  urlMetadata:string="http://backend:8080/api/service-metadata/";

  constructor(private http: HttpClient) { }

  getMetadata(id:number):Observable<Metadata>{
    return this.http.get<Metadata>(this.urlMetadata+"/"+id);
  }

  updateMetadata(c:Metadata,id:number):Observable<Metadata>{
    return this.http.put<Metadata>(this.urlMetadata+"/"+id,c);
  }  
  
  deleteMetadata(id:number):Observable<Metadata>{
    return this.http.delete<Metadata>(this.urlMetadata+"/"+id);
  }

  patchMetadata(c:Metadata):Observable<Metadata>{
      return this.http.patch<Metadata>(this.urlMetadata,c);
  }


  getAll():Observable<Metadata[]>{
    return this.http.get<Metadata[]>(this.urlMetadata);
  }

  createMetadata(c:Metadata):Observable<Metadata>{
    return this.http.post<Metadata>(this.urlMetadata+"/create",c);
  }


}
