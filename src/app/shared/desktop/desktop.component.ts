import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  @Output() closeDesktop = new EventEmitter();

  public colors: string[] = [
    '#000000',
    '#3461a8',
    '#d3d3d3',
    '#e54d42',
    '#e96e4c',
    '#e6a935',
    '#85c33d',
    '#ceeed2',
    '#784cc0',
    '#000000',
  ];

  constructor() {}

  ngOnInit(): void {}
}
