import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSessionInfoComponent } from './schedule-session-info.component';

describe('ScheduleSessionInfoComponent', () => {
  let component: ScheduleSessionInfoComponent;
  let fixture: ComponentFixture<ScheduleSessionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSessionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSessionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
