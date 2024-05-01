import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensaverPageComponent } from './screensaver-page.component';

describe('ScreensaverPageComponent', () => {
  let component: ScreensaverPageComponent;
  let fixture: ComponentFixture<ScreensaverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreensaverPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreensaverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
