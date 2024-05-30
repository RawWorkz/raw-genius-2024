import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  time?: ITimeObj;
  myTimeout: any;

  constructor() { }

  ngOnInit(): void {
    this.startTime();
  }

  checkTime(i: number): string {
    let str = "" + i;
    if (i < 10) {
      str = "0" + i;
    }
    return str;
  }

  startTime(): void {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let _h = this.checkTime(h);
    let _m = this.checkTime(m);
    let _s = this.checkTime(s);
    this.time = {
      hours: _h,
      minutes: _m,
      seconds: _s,
    };
    this.myTimeout = window.setTimeout(() => { this.startTime() }, 1000);
  }
}

export interface ITimeObj {
  hours: string;
  minutes: string;
  seconds: string;
}

