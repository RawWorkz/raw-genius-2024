import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-offcanvas',
	templateUrl: './offcanvas.component.html',
	styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

	@Input() type: string = 'default';

	constructor() { }

	ngOnInit(): void {
		console.log(this.type);
	}

}
