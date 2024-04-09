import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTwoComponent } from './hello-two.component';

describe('HelloTwoComponent', () => {
  let component: HelloTwoComponent;
  let fixture: ComponentFixture<HelloTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
