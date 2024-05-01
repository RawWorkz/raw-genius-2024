import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screensaver-page',
  templateUrl: './screensaver-page.component.html',
  styleUrls: ['./screensaver-page.component.scss']
})
export class ScreensaverPageComponent implements OnInit {

  title = 'RawGenius Screensaver';

  isFullscreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Listen for fullscreen change event
    document.addEventListener('fullscreenchange', () => {
      this.isFullscreen = !!window.document.fullscreenElement;
    });
  }

  onFullScreenClickHandler() {
    console.log(window.document.fullscreenEnabled);
    console.log(window.document.fullscreenElement);


    if (!window.document.fullscreenElement) {
      this.isFullscreen = true;
      document.body.requestFullscreen();
    } else {
      this.isFullscreen = false;
      window.document.exitFullscreen();
    }
  }

}
