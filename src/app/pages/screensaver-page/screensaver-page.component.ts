import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screensaver-page',
  templateUrl: './screensaver-page.component.html',
  styleUrls: ['./screensaver-page.component.scss']
})
export class ScreensaverPageComponent implements OnInit {

  title = 'RawGenius Screensaver';

  constructor() { }

  ngOnInit(): void { }

  onFullScreenClickHandler() {
    console.log(window.document.fullscreenEnabled);
    console.log(window.document.fullscreenElement);
    if (!window.document.fullscreenElement) {
      document.body.requestFullscreen();
    } else {
      window.document.exitFullscreen();
    }
  }

}
