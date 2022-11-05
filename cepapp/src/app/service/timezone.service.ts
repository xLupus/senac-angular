import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import  { Timezone }  from "../model/timezone";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(private http: HttpClient) { }

  obterTimezone(fusohora: string): Observable<Timezone> {
      return this.http.get<Timezone>(`https://worldtimeapi.org/api/timezone/${fusohora}`);
  }
}
