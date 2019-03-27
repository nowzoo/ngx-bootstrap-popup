import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-demo-tooltip-template',
  templateUrl: './demo-tooltip-template.component.html',
  styleUrls: ['./demo-tooltip-template.component.scss']
})
export class DemoTooltipTemplateComponent implements OnInit, OnDestroy {
  name = 'World';
  time: string;
  dots: string;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.dots = '';
    this.time = new Date().toLocaleTimeString();
    this.interval = setInterval(() => {
      if (this.dots.length < 30) {
        this.dots += '.';
      } else {
        this.dots = '';
      }
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
