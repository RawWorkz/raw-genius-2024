import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringboardComponent } from './springboard.component';

describe('SpringboardComponent', () => {
  let component: SpringboardComponent;
  let fixture: ComponentFixture<SpringboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
