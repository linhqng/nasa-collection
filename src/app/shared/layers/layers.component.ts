import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss'],
})
export class LayersComponent implements OnInit {
  @Output() closeLayers = new EventEmitter();

  public items: string[] = [
    'Document',
    'Browser',
    'Title',
    'Button',
    'video 1',
    'video 2',
    'video 3',
  ];

  constructor() {}

  ngOnInit(): void {}
}
