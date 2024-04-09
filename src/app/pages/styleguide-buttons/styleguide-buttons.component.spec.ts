import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideButtonsComponent } from './styleguide-buttons.component';

describe('StyleguideButtonsComponent', () => {
  let component: StyleguideButtonsComponent;
  let fixture: ComponentFixture<StyleguideButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleguideButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleguideButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
