import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  public closeVideoPlayer(): void {
    this._location.back();
  }
}
