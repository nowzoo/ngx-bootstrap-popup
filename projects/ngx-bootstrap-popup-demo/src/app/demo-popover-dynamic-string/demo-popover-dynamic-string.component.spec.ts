import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPopoverDynamicStringComponent } from './demo-popover-dynamic-string.component';

describe('DemoPopoverDynamicStringComponent', () => {
  let component: DemoPopoverDynamicStringComponent;
  let fixture: ComponentFixture<DemoPopoverDynamicStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPopoverDynamicStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPopoverDynamicStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
