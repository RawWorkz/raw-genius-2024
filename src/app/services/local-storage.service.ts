import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	setItem(key: string, value: any) {
		localStorage.setItem(key, value);
	}

	getItem(key: string): any {
		return localStorage.getItem(key);
	}

	removeItem(key: string) {
		localStorage.removeItem(key);
	}

	clear() {
		localStorage.clear();
	}

	setBool(key: string, value: boolean) {
		localStorage.setItem(key, String(value));
	}

	getBool(key: string): boolean {
		return localStorage.getItem(key) === 'true';
	}

	setObject(key: string, value: object) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getObject(key: string): object {
		let data: string = JSON.stringify(localStorage.getItem(key));
		return JSON.parse(data);
	}
}
