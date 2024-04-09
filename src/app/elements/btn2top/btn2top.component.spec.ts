import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn2topComponent } from './btn2top.component';

describe('Btn2topComponent', () => {
  let component: Btn2topComponent;
  let fixture: ComponentFixture<Btn2topComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Btn2topComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn2topComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
