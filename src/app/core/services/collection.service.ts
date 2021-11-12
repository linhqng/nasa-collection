import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private apiService: ApiService) {}

  getArticles(params: {}): Observable<Article[]> {
    let filterParams = new HttpParams();
    return this.apiService.get('list', filterParams.appendAll(params));
  }
}
