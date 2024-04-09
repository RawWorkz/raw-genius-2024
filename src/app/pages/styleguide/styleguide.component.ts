import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-styleguide',
	templateUrl: './styleguide.component.html',
	styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {

	constructor() { }


	css(element: Element, property: string): string {
		return window.getComputedStyle(element, null).getPropertyValue(property);
	}

	// styleSpecs(element: Element) {
	//   let size = this.css(element, 'font-size');
	//   let family = this.css(element, 'font-family');
	//   family = family.split(',')[0];
	//   let span: HTMLElement = element.parentElement.getElementsByClassName('badge')[0] as HTMLElement;
	//   span.innerText = `${size}, ${family}`;
	// }

	ngOnInit(): void {

		// console.log(css(document.querySelector('.display-1'), 'font-size'));
		// console.log(css(document.querySelector('.display-1'), 'font-family'));
		// this.styleSpecs(document.querySelector('.display-1'));
		// this.styleSpecs(document.querySelector('.display-2'));
		// this.styleSpecs(document.querySelector('.display-3'));
		// this.styleSpecs(document.querySelector('.display-4'));
		// this.styleSpecs(document.querySelector('.display-5'));
		// this.styleSpecs(document.querySelector('.display-6'));
		// this.styleSpecs(document.querySelector('.h1'));
		// this.styleSpecs(document.querySelector('.h2'));
		// this.styleSpecs(document.querySelector('.h3'));
		// this.styleSpecs(document.querySelector('.h4'));
		// this.styleSpecs(document.querySelector('.h5'));
		// this.styleSpecs(document.querySelector('.h6'));

	}

}
