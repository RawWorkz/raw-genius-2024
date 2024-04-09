import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-btn2top',
	templateUrl: './btn2top.component.html',
	styleUrls: ['./btn2top.component.scss']
})
export class Btn2topComponent implements OnInit {

	style: string = 'hide';

	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		window.addEventListener('scroll', this.onScrollHandler.bind(this));
	}

	ngOnDestroy() {
		window.removeEventListener('scroll', this.onScrollHandler.bind(this));
	}

	onScrollHandler() {
		const y = window.scrollY;
		if (y >= (window.innerHeight / 2)) {
			this.style = "show";
		} else {
			this.style = "hide";
		}
	}

	onClickHandler(e: MouseEvent) {
		e.preventDefault();
		window.scrollTo(0, 0);
	}

}
