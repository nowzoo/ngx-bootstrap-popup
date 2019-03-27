import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-popover-dynamic-string',
  templateUrl: './demo-popover-dynamic-string.component.html',
  styleUrls: ['./demo-popover-dynamic-string.component.scss']
})
export class DemoPopoverDynamicStringComponent implements OnInit, OnDestroy {
  dots: string;
  title: string;
  content: string;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.dots = '';
    this.title = 'Loading';
    this.content = 'Loading';
    this.interval = setInterval(() => {
      if (this.dots.length < 50) {
        this.dots += '.';
      } else {
        this.dots = '';
      }
      this.title = 'Loading' + this.dots;
      this.content = 'Loading' + this.dots + ' ' + new Date().toLocaleDateString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}
