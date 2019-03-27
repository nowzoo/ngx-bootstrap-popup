import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTooltipDataAttributesComponent } from './demo-tooltip-data-attributes.component';

describe('DemoTooltipDataAttributesComponent', () => {
  let component: DemoTooltipDataAttributesComponent;
  let fixture: ComponentFixture<DemoTooltipDataAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTooltipDataAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTooltipDataAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
