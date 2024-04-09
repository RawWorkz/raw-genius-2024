import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
	selector: 'app-count-trigger',
	templateUrl: './count-trigger.component.html',
	styleUrls: ['./count-trigger.component.scss']
})
export class CountTriggerComponent implements OnInit {

	@Input() id: string = 'counter-trigger-' + this.counterService.getString();
	@Input() total: number = 10;
	@Input() dir: string = 'down';
	@Input() ms: number = 1000;

	counter: number = 0;
	intervalId!: any;

	constructor(
		private counterService: CounterService
	) { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		window.addEventListener('scroll', this.onScrollHandler.bind(this));

		// console.info(`ADD count (${this.id})`);
	}

	ngOnDestroy() {
		window.removeEventListener('scroll', this.onScrollHandler.bind(this));
		clearInterval(this.intervalId);

		// console.info(`REMOVE count (${this.id})`);
	}

	onScrollHandler() {
		let el = document.getElementById(this.id) as HTMLElement;
		if (!el) return; // onInit might be to fast... pershaps ngAfterViewInit

		if (window.scrollY > el.offsetTop - (window.innerHeight * 0.5)) {
			if (!el.getAttribute('isAnimated')) {
				// console.log(el.getAttribute('isAnimated'));
				el.setAttribute('isAnimated', 'true');
				if (this.dir === 'up') {
					// count up
					this.counter = 0;
					this.countUp();
				} else {
					// count down
					this.counter = this.total;
					this.countDown();
				}
			}
		}
	}

	countDown() {
		this.intervalId = setInterval(() => {
			if (this.counter > 0) {
				this.counter--;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}

	countUp() {
		this.intervalId = setInterval(() => {
			if (this.counter < this.total) {
				this.counter++;
			} else {
				clearInterval(this.intervalId);
			}
		}, this.ms);
	}

}
