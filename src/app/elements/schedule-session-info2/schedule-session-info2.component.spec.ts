import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSessionInfo2Component } from './schedule-session-info2.component';

describe('ScheduleSessionInfo2Component', () => {
  let component: ScheduleSessionInfo2Component;
  let fixture: ComponentFixture<ScheduleSessionInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSessionInfo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSessionInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
