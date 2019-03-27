import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipDismissComponent } from './demo-tooltip-dismiss.component';

describe('DemoTooltipDismissComponent', () => {
  let component: DemoTooltipDismissComponent;
  let fixture: ComponentFixture<DemoTooltipDismissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipDismissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipDismissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
