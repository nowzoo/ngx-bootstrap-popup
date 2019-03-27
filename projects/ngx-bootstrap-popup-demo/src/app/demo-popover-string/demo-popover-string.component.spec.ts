import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPopoverStringComponent } from './demo-popover-string.component';

describe('DemoPopoverStringComponent', () => {
  let component: DemoPopoverStringComponent;
  let fixture: ComponentFixture<DemoPopoverStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPopoverStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPopoverStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
