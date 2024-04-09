import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAlertComponent } from './cta-alert.component';

describe('CtaAlertComponent', () => {
  let component: CtaAlertComponent;
  let fixture: ComponentFixture<CtaAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
