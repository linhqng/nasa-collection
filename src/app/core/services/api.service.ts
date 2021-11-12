import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

const baseUrl = 'https://picsum.photos/v2/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${baseUrl}${path}`, { params })
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${baseUrl}${path}`, body)
      .pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${baseUrl}${path}`, body)
      .pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${baseUrl}${path}`)
      .pipe(catchError(ApiService.formatErrors));
  }
}
