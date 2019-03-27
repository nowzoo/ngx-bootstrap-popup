import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPopoverTemplateComponent } from './demo-popover-template.component';

describe('DemoPopoverTemplateComponent', () => {
  let component: DemoPopoverTemplateComponent;
  let fixture: ComponentFixture<DemoPopoverTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPopoverTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPopoverTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
