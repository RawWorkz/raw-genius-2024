import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {

	private counter: number = 0;

	constructor() { }

	getString(): string {
		this.counter++;
		return `${this.counter}`;
	}

	getNumber(): number {
		this.counter++;
		return this.counter;
	}
}
