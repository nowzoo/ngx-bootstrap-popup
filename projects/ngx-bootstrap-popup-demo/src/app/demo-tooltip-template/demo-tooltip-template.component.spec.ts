import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipTemplateComponent } from './demo-tooltip-template.component';

describe('DemoTooltipTemplateComponent', () => {
  let component: DemoTooltipTemplateComponent;
  let fixture: ComponentFixture<DemoTooltipTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
