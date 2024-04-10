import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleThreeComponent } from './schedule-three.component';

describe('ScheduleThreeComponent', () => {
  let component: ScheduleThreeComponent;
  let fixture: ComponentFixture<ScheduleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
