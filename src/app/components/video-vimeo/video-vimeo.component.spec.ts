import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVimeoComponent } from './video-vimeo.component';

describe('VideoVimeoComponent', () => {
  let component: VideoVimeoComponent;
  let fixture: ComponentFixture<VideoVimeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoVimeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoVimeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
