import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-debug-id',
	templateUrl: './debug-id.component.html',
	styleUrls: ['./debug-id.component.scss']
})
export class DebugIdComponent implements OnInit {

	list: Element[] = [];
	isProduction: boolean = environment.production;

	constructor() { }

	ngOnInit() {
		const arr = [];
		const list = document.querySelectorAll('[id]');
		// console.log(list);
		if (list === null) return;

		for (let i = 0; i < list.length; i++) {
			const element = list[i];
			arr.push(element);
		}
		this.list = arr;
	}
}
