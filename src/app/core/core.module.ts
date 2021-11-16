import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShortenPipe } from './pipe/shorten.pipe';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { TransformInterceptorService } from './interceptors/transform.interceptor';
import { HttpErrorInterceptorService } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [ShortenPipe],
  imports: [CommonModule],
  exports: [ShortenPipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransformInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
