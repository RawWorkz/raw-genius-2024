import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSleepComponent } from './location-sleep.component';

describe('LocationSleepComponent', () => {
  let component: LocationSleepComponent;
  let fixture: ComponentFixture<LocationSleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSleepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
