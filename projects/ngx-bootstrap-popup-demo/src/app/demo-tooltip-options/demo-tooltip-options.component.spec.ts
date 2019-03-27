import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipOptionsComponent } from './demo-tooltip-options.component';

describe('DemoTooltipOptionsComponent', () => {
  let component: DemoTooltipOptionsComponent;
  let fixture: ComponentFixture<DemoTooltipOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
