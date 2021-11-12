import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShortenPipe } from './pipe/shorten.pipe';

@NgModule({
  declarations: [ShortenPipe],
  imports: [CommonModule],
  exports: [ShortenPipe],
  providers: [HttpClientModule],
})
export class CoreModule {}
