import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpIndicatorComponent } from './lp-indicator.component';

describe('LpIndicatorComponent', () => {
  let component: LpIndicatorComponent;
  let fixture: ComponentFixture<LpIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
