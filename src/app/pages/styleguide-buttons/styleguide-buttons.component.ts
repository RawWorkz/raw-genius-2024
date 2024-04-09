import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-styleguide-buttons',
	templateUrl: './styleguide-buttons.component.html',
	styleUrls: ['./styleguide-buttons.component.scss']
})
export class StyleguideButtonsComponent implements OnInit {

	title: string = 'Custom Buttons';

	constructor() { }

	ngOnInit(): void {
		// throw new Error('Method not implemented.');
	}

}
