import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeSlotModel } from '../objects/time-slot-model';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotModelService {

  urlTimeSlotModel:string="http://backend:8080/api/time-slot-models/";

  constructor(private http: HttpClient){}


  getTimeSlotModel(id:number):Observable<TimeSlotModel>{
    return this.http.get<TimeSlotModel>(this.urlTimeSlotModel+"/"+id);
  }

  updateTimeSlotModel(c:TimeSlotModel,id:number):Observable<TimeSlotModel>{
    return this.http.put<TimeSlotModel>(this.urlTimeSlotModel+"/"+id,c);
  }  
  
  deleteTimeSlotModel(id:number):Observable<TimeSlotModel>{
    return this.http.delete<TimeSlotModel>(this.urlTimeSlotModel+"/"+id);
  }

  patchTimeSlotModel(c:TimeSlotModel):Observable<TimeSlotModel>{
      return this.http.patch<TimeSlotModel>(this.urlTimeSlotModel,c);
  }


  getAll():Observable<TimeSlotModel[]>{
    return this.http.get<TimeSlotModel[]>(this.urlTimeSlotModel);
  }

  createTimeSlotModel(c:TimeSlotModel):Observable<TimeSlotModel>{
    return this.http.post<TimeSlotModel>(this.urlTimeSlotModel+"/create",c);
  }

}
