import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Article } from '../models';

export class TransformInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (
          event.type === HttpEventType.Response &&
          event.body instanceof Array
        ) {
          return event.body.map((item: Article) => {
            const { id, author, download_url } = item;
            return {
              id,
              author,
              download_url,
            } as Article;
          });
        } else {
          return event;
        }
      })
    );
  }
}
