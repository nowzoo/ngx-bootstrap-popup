import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-popover-template',
  templateUrl: './demo-popover-template.component.html',
  styleUrls: ['./demo-popover-template.component.scss']
})
export class DemoPopoverTemplateComponent implements OnInit, OnDestroy {
  time: string;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.time = new Date().toLocaleTimeString();
    this.interval = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
