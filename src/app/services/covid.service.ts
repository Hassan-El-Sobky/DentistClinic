import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  url = 'https://api.covid19api.com/summary';
  constructor(private _http:HttpClient) { 
  }

  getData():Observable<any>
  {
    return this._http.get<any>(this.url);
  }
  



}
