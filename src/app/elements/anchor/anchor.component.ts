import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-anchor',
	templateUrl: './anchor.component.html',
	styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

	@Input() id: string = 'Example-component';
	@Input() title: string = 'example';

	isProduction: boolean = environment.production;

	constructor() { }

	ngOnInit(): void {
	}

}


