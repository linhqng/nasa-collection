import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss'],
})
export class ControlButtonsComponent implements OnInit {
  @Input() isHandoffActive: boolean = false;
  @Output() toggleHandoff = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
