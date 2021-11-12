import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent implements OnInit {
  @Input() title: string = 'Properties';

  public isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
