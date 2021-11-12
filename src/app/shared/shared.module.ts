import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './button/button.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { CoreModule } from '../core/core.module';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { HeaderComponent } from './header/header.component';
import { LayersComponent } from './layers/layers.component';
import { DesktopComponent } from './desktop/desktop.component';
import { ZoomComponent } from './zoom/zoom.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  declarations: [
    ButtonComponent,
    VideoItemComponent,
    ModalComponent,
    InputComponent,
    ControlButtonsComponent,
    HeaderComponent,
    LayersComponent,
    DesktopComponent,
    ZoomComponent,
    CollapseComponent,
  ],
  imports: [CommonModule, CoreModule, NgbModule],
  exports: [
    ButtonComponent,
    VideoItemComponent,
    ModalComponent,
    InputComponent,
    ControlButtonsComponent,
    HeaderComponent,
    LayersComponent,
    DesktopComponent,
    ZoomComponent,
    CollapseComponent,
  ],
})
export class SharedModule {}
