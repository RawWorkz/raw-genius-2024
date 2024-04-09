import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	public static default: string = 'default';
	public static localStorageVar: string = 'theme';

	private readonly style: HTMLLinkElement;

	constructor() {
		this.style = document.createElement('link');
		this.style.rel = 'stylesheet';
		document.head.appendChild(this.style);

		if (localStorage.getItem(ThemeService.localStorageVar) !== undefined) {
			this.style.href = `/${this.current}.css`;
		}
	}

	// ____________________________________ getter/setter ____________________________________

	public get current(): string {
		return localStorage.getItem(ThemeService.localStorageVar) ?? ThemeService.default;
	}

	public set current(value: string) {
		localStorage.setItem(ThemeService.localStorageVar, value);
		this.style.href = `/${value}.css`;
	}

}
