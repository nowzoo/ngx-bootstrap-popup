import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-tooltip-dynamic-string',
  templateUrl: './demo-tooltip-dynamic-string.component.html',
  styleUrls: ['./demo-tooltip-dynamic-string.component.scss']
})
export class DemoTooltipDynamicStringComponent implements OnInit, OnDestroy {
  dots: string;
  tooltipMessage: string;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.dots = '';
    this.tooltipMessage = 'Loading';
    this.interval = setInterval(() => {
      if (this.dots.length < 50) {
        this.dots += '.';
      } else {
        this.dots = '';
      }
      this.tooltipMessage = 'Loading' + this.dots;

    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}
