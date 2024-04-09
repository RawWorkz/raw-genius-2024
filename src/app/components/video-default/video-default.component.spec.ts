import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDefaultComponent } from './video-default.component';

describe('VideoDefaultComponent', () => {
  let component: VideoDefaultComponent;
  let fixture: ComponentFixture<VideoDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
