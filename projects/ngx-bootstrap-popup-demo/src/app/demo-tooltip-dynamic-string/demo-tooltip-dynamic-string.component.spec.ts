import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipDynamicStringComponent } from './demo-tooltip-dynamic-string.component';

describe('DemoTooltipDynamicStringComponent', () => {
  let component: DemoTooltipDynamicStringComponent;
  let fixture: ComponentFixture<DemoTooltipDynamicStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipDynamicStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipDynamicStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
