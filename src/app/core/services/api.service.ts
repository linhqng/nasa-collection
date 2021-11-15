import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://picsum.photos/v2/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${baseUrl}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${baseUrl}${path}`, body);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${baseUrl}${path}`, body);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${baseUrl}${path}`);
  }
}
