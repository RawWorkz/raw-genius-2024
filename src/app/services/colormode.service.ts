import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ColormodeService {

	public static default: string = 'auto';
	public static localStorageVar: string = 'mode';

	constructor() {
		this.setTheme(this.getPreferredTheme());
	}

	// ____________________________________ theme ____________________________________

	getPreferredTheme() {
		if (this.current) {
			return this.current;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	setTheme(theme: string) {
		if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-bs-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-bs-theme', theme);
		}
	}

	// ____________________________________ getter/setter ____________________________________

	public get current(): string {
		return localStorage.getItem(ColormodeService.localStorageVar) ?? ColormodeService.default;
	}

	public set current(value: string) {
		localStorage.setItem(ColormodeService.localStorageVar, value);
		this.setTheme(value);
	}
}
