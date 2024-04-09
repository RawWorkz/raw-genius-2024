import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojicanvasComponent } from './emojicanvas.component';

describe('EmojicanvasComponent', () => {
  let component: EmojicanvasComponent;
  let fixture: ComponentFixture<EmojicanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojicanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojicanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
