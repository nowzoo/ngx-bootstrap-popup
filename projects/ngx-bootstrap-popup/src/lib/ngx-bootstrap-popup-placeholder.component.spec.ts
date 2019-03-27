import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapPopupPlaceholderComponent } from './ngx-bootstrap-popup-placeholder.component';

describe('NgxBootstrapPopupPlaceholderComponent', () => {
  let component: NgxBootstrapPopupPlaceholderComponent;
  let fixture: ComponentFixture<NgxBootstrapPopupPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapPopupPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapPopupPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
