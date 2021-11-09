import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [ButtonComponent, LayoutComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, LayoutComponent],
})
export class SharedModule {}
