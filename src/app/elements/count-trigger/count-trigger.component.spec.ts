import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTriggerComponent } from './count-trigger.component';

describe('CountTriggerComponent', () => {
  let component: CountTriggerComponent;
  let fixture: ComponentFixture<CountTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
