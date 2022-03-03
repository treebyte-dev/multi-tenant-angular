// services/coupon.service.ts
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {EnvService} from './env.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = '';
  statusOk: boolean;
  data: any;
  constructor(private http: HttpClient, private _envService: EnvService) {}
  getTasks() {
    // let params = new HttpParams();
    this.apiUrl = this._envService.getApiUrl();
    return  this.http.get(`${this.apiUrl}/tasks`);
  }

}
