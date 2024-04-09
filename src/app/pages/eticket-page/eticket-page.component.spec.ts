import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETicketPageComponent } from './eticket-page.component';

describe('ETicketPageComponent', () => {
  let component: ETicketPageComponent;
  let fixture: ComponentFixture<ETicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETicketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
