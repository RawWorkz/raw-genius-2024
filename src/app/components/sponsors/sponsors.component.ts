import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
	selector: 'app-sponsors',
	templateUrl: './sponsors.component.html',
	styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

	list: { url: string, image: string, title: string }[] = [
		{
			url: 'https://picsum.photos/seed/bootstrap/200/100',
			image: 'https://picsum.photos/seed/bootstrap/200/100',
			title: 'Bootstrap'
		},
		{
			url: 'https://picsum.photos/seed/ficons/200/100',
			image: 'https://picsum.photos/seed/ficons/200/100',
			title: 'Ficons'
		},
		{
			url: 'https://picsum.photos/seed/lorem/200/100',
			image: 'https://picsum.photos/seed/lorem/200/100',
			title: 'Lorem Picsum'
		},
		{
			url: 'https://picsum.photos/seed/video/200/100',
			image: 'https://picsum.photos/seed/video/200/100',
			title: 'Sample video and audio'
		},
		{
			url: 'https://picsum.photos/seed/json/200/100',
			image: 'https://picsum.photos/seed/json/200/100',
			title: 'Json placeholder'
		},
		{
			url: 'https://picsum.photos/seed/user/200/100',
			image: 'https://picsum.photos/seed/user/200/100',
			title: 'Random user'
		},
	];

	@Input() id: string = 'ticker-tape';

	constructor() { }

	ngOnInit(): void {
		const l = JSON.parse(JSON.stringify(this.list));
		for (let i = 0; i < this.list.length; i++) {
			const element = this.list[i];
			l.push(element);
		}
		this.list = l;
	}

	ngAfterViewInit(): void {
		this.setStyle();
	}

	setStyle() {
		// let container = document.getElementById(this.id);
		// if (!container) {
		// 	console.error('Container not found');
		// 	return;
		// }

		// let ticker = container.getElementsByClassName('ticker')[0];
		// if (!ticker) {
		// 	console.error('Ticker not found');
		// 	return;
		// }

		const paddingRight = 50; // px
		const imgWidth = 200; // px

		const total = ((this.list.length * 0.5) * (paddingRight + imgWidth));

		const ticker = document.querySelector('.ticker') as HTMLElement;
		if (!ticker) {
			console.error('.ticker not found');
			return;
		}
		ticker.style.width = `${total * 2}px`;
		ticker.style.borderColor = `green`;
		ticker.style.animation = 'ticker-animation 18s linear infinite';
		ticker.style.animationName = 'ticker-animation';
		ticker.style.animationDuration = '18s';
		ticker.style.animationTimingFunction = 'linear';
		ticker.style.animationIterationCount = 'infinite';

		const keyframes = `
			@keyframes ticker-animation {
				0% {
					transform: Translate3d(0, 0, 0);
				}
				100% {
					transform: Translate3d(-${total}px, 0, 0);
				}
			}
			`;

		const style = document.createElement('style');
		style.innerHTML = keyframes;
		document.head.appendChild(style);

	}

}
