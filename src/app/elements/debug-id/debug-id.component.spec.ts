import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugIdComponent } from './debug-id.component';

describe('DebugIdComponent', () => {
  let component: DebugIdComponent;
  let fixture: ComponentFixture<DebugIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
