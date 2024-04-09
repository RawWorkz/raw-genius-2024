import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-springboard',
	templateUrl: './springboard.component.html',
	styleUrls: ['./springboard.component.scss']
})
export class SpringboardComponent implements OnInit {

	@Input() display: string = 'default'; // component

	springBoarArr: { path: string, title: string }[] = [
		{ path: '/', title: 'Home' },
		{ path: '/program', title: 'Programma' },
		{ path: '/plattegrond', title: 'Plattegrond' },
		{ path: '/locatie', title: 'Locatie' },
		{ path: '/e-ticket', title: 'E-ticket' },
	];

	rowClass = 'row g-3 justify-content-center';
	springClass = 'col-6 col-md-4 col-lg-2';

	constructor() { }

	ngOnInit(): void {
		if (this.display == 'offcanvas') {
			this.rowClass = 'row g-3';
			this.springClass = 'col-6';
		}
	}

	onClickHandler(e: Event, str: string) {
		// console.log(e);
		console.log(str);
	}
}
