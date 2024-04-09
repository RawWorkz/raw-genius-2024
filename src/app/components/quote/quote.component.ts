import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

	@Input() id: string = 'quote-trigger-' + this.counterService.getString();
	@Input() ms: number = 200;
	@Input() quote: string = `It wasn't just about me. There's a bigger meaning for every little girl who had dreams of playing professional basketball.`;
	@Input() writer: string = `Sheryl Swoopes`;

	wordArr = this.quote.split(' ');
	counter: number = 0;
	isDone: boolean = false;
	intervalId!: any;

	constructor(
		private counterService: CounterService
	) { }

	ngOnInit(): void {
		this.setup();
	}

	ngOnChange() {
		console.log(this.quote);
		this.setup();
	}

	setup() {
		this.wordArr = [];
		this.wordArr = this.quote.split(' ');
		this.counter = 0;
		this.isDone = false;
	}

	ngAfterViewInit(): void {
		window.addEventListener('scroll', this.onScrollHandler.bind(this));

		// console.info(`ADD quote (${this.id})`);
	}

	ngOnDestroy() {
		window.removeEventListener('scroll', this.onScrollHandler.bind(this));
		clearInterval(this.intervalId);

		// console.info(`REMOVE quote (${this.id})`);
	}

	onScrollHandler() {
		let el = document.getElementById(this.id) as HTMLElement;
		if (!el) return; // onInit might be to fast... pershaps ngAfterViewInit

		if (window.scrollY > el.offsetTop - (window.innerHeight * 0.5)) {
			if (!el.getAttribute('isAnimated')) {
				// console.log(el.getAttribute('isAnimated'));
				el.setAttribute('isAnimated', 'true');
				this.counter = 0;
				this.animate();
			}
		}
	}

	animate() {
		this.intervalId = setInterval(() => {
			if (this.counter >= this.wordArr.length) {
				clearInterval(this.intervalId);
				this.isDone = true;
			} else {
				this.counter += 1;
			}
		}, this.ms);
	}

}
