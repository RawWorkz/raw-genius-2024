import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarIcsComponent } from './calendar-ics.component';

describe('CalendarIcsComponent', () => {
  let component: CalendarIcsComponent;
  let fixture: ComponentFixture<CalendarIcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarIcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarIcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
