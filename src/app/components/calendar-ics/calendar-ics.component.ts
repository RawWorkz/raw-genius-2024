import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-calendar-ics',
	templateUrl: './calendar-ics.component.html',
	styleUrls: ['./calendar-ics.component.scss']
})
export class CalendarIcsComponent implements OnInit {


	@Input() file!: string;

	constructor() { }

	ngOnInit(): void {
		// console.warn(this.file);

	}
	onClickHandler() {
		// throw new Error('Method not implemented.');
		// TODO: use a download link instead target blank
	}
}
