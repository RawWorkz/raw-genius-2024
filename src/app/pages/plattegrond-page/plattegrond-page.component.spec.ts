import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlattegrondPageComponent } from './plattegrond-page.component';

describe('PlattegrondPageComponent', () => {
  let component: PlattegrondPageComponent;
  let fixture: ComponentFixture<PlattegrondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlattegrondPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlattegrondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
