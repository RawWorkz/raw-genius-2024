import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-col2',
	templateUrl: './col2.component.html',
	styleUrls: ['./col2.component.scss']
})
export class Col2Component implements OnInit {

	@Input() reverse: boolean = false;
	@Input() title: string = 'Example title col2 🔫';
	@Input() body: string = 'Example body col2 🐞';
	@Input() img: string = 'https://picsum.photos/seed/col1/500/500';

	constructor() { }

	ngOnInit(): void {
	}

}
