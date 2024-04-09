import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-count',
	templateUrl: './count.component.html',
	styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

	// @Input() total: number = 10;
	// @Input() dir: string = 'down';
	@Input() ms: number = 1000;
	//
	@Input() from: number = 10;
	@Input() to: number = 5;

	counter: number = 0;
	intervalId!: any;

	constructor() { }

	ngOnInit(): void {
		this.counter = this.from;
		if (this.from >= this.to) {
			this.countDown();
		} else {
			this.countUp();
		}
	}

	ngOnDestroy() {
		clearInterval(this.intervalId);
	}

	countDown() {
		this.intervalId = setInterval(() => {
			if (this.counter > this.to) {
				this.counter--;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}

	countUp() {
		this.intervalId = setInterval(() => {
			if (this.counter < this.to) {
				this.counter++;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}

}
