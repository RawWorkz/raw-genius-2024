import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSpeakersComponent } from './cta-speakers.component';

describe('CtaSpeakersComponent', () => {
  let component: CtaSpeakersComponent;
  let fixture: ComponentFixture<CtaSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
