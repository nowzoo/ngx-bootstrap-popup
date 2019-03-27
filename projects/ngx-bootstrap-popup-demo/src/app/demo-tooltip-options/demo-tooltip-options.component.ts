import { Component, OnInit } from '@angular/core';
import { IPopupOptions } from '@nowzoo/ngx-bootstrap-popup';

@Component({
  selector: 'app-demo-tooltip-options',
  templateUrl: './demo-tooltip-options.component.html',
  styleUrls: ['./demo-tooltip-options.component.scss']
})
export class DemoTooltipOptionsComponent implements OnInit {
  options: IPopupOptions = {
    delay: {show: 100, hide: 50},
    placement: 'bottom',
    trigger: 'click'
  };
  constructor() { }

  ngOnInit() {
  }

}
