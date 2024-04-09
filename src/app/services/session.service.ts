import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionService {

	constructor() { }

	setItem(key: string, value: any) {
		sessionStorage.setItem(key, value);
	}

	getItem(key: string): any {
		return sessionStorage.getItem(key);
	}

	public removeItem(key: string) {
		sessionStorage.removeItem(key);
	}

	public clear() {
		sessionStorage.clear();
	}

	setBool(key: string, value: boolean) {
		sessionStorage.setItem(key, String(value));
	}

	getBool(key: string): boolean {
		return sessionStorage.getItem(key) === 'true';
	}

	setObject(key: string, value: object) {
		sessionStorage.setItem(key, JSON.stringify(value));
	}

	getObject(key: string): object {
		let data: string = JSON.stringify(sessionStorage.getItem(key));
		return JSON.parse(data);
	}

}
