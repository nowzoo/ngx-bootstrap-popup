import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-demo-tooltip-template',
  templateUrl: './demo-tooltip-template.component.html',
  styleUrls: ['./demo-tooltip-template.component.scss']
})
export class DemoTooltipTemplateComponent implements OnInit, OnDestroy {
  name = 'Guy';
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
