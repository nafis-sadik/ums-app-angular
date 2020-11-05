import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogGateComponent } from './log-gate.component';

describe('LogGateComponent', () => {
  let component: LogGateComponent;
  let fixture: ComponentFixture<LogGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
