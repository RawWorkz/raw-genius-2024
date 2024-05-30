import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-schedule-page',
  templateUrl: './time-schedule-page.component.html',
  styleUrls: ['./time-schedule-page.component.scss']
})
export class TimeSchedulePageComponent implements OnInit {

  title = 'RawGenius Time Schedule';

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
