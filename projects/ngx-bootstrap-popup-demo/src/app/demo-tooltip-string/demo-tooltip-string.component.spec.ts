import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipStringComponent } from './demo-tooltip-string.component';

describe('DemoTooltipStringComponent', () => {
  let component: DemoTooltipStringComponent;
  let fixture: ComponentFixture<DemoTooltipStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
