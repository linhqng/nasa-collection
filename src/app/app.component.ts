import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isOpenHandoff: boolean = true;
  public isOpenLayers: boolean = true;

  public toggleHandoff(): void {
    this.isOpenHandoff = !this.isOpenHandoff;
    this.isOpenLayers = this.isOpenHandoff;
  }

  public closeLayers(): void {
    this.isOpenLayers = !this.isOpenLayers;
  }
}
