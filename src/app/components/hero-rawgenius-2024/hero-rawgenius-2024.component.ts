import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-hero-rawgenius-2024',
	templateUrl: './hero-rawgenius-2024.component.html',
	styleUrls: ['./hero-rawgenius-2024.component.scss']
})
export class HeroRawGenius2024Component implements OnInit {

	title = 'app-hero-rawgenius-2024';

	containerID = "container-hero-svg2";


	constructor(
		private http: HttpClient,
	) { }

	ngOnInit(): void {
		// [mck] dit kan waarschijnlijk wel beter in Angular zelf, maar dit werkt ook
		let container = document.getElementById(this.containerID);
		if (container === null) return;
		let url = container.querySelector("img")?.src;
		if (url === undefined) return;
		this.getSVGContent(container, url);
	}

	getSVGContent(container: HTMLElement, url: string) {
		let scope = this;
		this.http.get(url, { responseType: 'text' }).subscribe({
			next(data) {
				// console.log(data);
				container.innerHTML = data;
				scope.extractData(data);
			},
			error(err) {
				console.log(err);
			},
		});
	}

	extractData(data: string) {
		// console.log(data);
		console.log(this.extractIDsFromSVG(data));

		let starID = 'path127';
		let planetID = 'g140';
		let ringID = 'g141';
		let astronautID = 'image141';

		document.getElementById(starID)?.setAttribute('class', 'rawgenius-star');
		document.getElementById(planetID)?.setAttribute('class', 'rawgenius-planet');
		document.getElementById(ringID)?.setAttribute('class', 'rawgenius-ring');
		document.getElementById(astronautID)?.setAttribute('class', 'rawgenius-astronaut');


		let transformRing = document.getElementById(ringID)?.getAttribute('transform'); // translate(1612.144 615.962)
		let posRing: { x: number, y: number } = this.convertTransform(transformRing);
		let ringX = posRing.x;
		let ringY = posRing.y;
		console.log(posRing);

		let transformPlanet = document.getElementById(planetID)?.getAttribute('transform'); // translate(1612.144 615.962)
		let posPlanet: { x: number, y: number } = this.convertTransform(transformPlanet);
		let planetX = posPlanet.x;
		let planetY = posPlanet.y;
		console.log(posPlanet);



		// inject css
		// Inject CSS
		const css = `

		:root {
			--planet-x: ${planetX}px;
			--planet-y: ${planetY}px;
			--ring-x: ${ringX}px;
			--ring-y: ${ringY}px;
		}

		@keyframes rawgenius-ring-animation {
			0% {
				transform: translate(var(--ring-x), calc(var(--ring-y) + 1%)) rotate(-0deg);
			}
			50% {
				transform: translate(var(--ring-x), calc(var(--ring-y) - 1%)) rotate(+0deg);
			}
			100% {
				transform: translate(var(--ring-x), calc(var(--ring-y) + 1%)) rotate(-0deg);
			}
		}


		@keyframes _______rawgenius-ring-animation {
			0% {
				transform: translate(${ringX + 1}px, ${ringY + 1}px) rotate(-2deg);
			}
			50% {
				transform: translate(${ringX}px, ${ringY - 1}px) rotate(2deg);
			}
			100% {
				transform: translate(${ringX}px, ${ringY + 1}px) rotate(-2deg);
			}
		}

		@keyframes __rawgenius-ring-animation {
			0% {
				transform: translate(var(--ring-x) calc(var(--ring-y) - 1%)) rotate(-2deg);
			}
			50% {
				transform: translate(var(--ring-x) calc(var(--ring-y) + 1%)) rotate(2deg);
			}
			100% {
				transform: translate(var(--ring-x) calc(var(--ring-y) - 1%)) rotate(-2deg);
			}
		}



		.rawgenius-ring {
			opacity: .9 !important;
			transform: translate(var(--ring-x), var(--ring-y));
			_transform-origin: calc(840px * 0.5) calc(481px * 0.5);
			_ringx: ${ringX};
			_ringy: ${ringY};
			transform-origin: ${ringX + (840 * 0.5)}px ${ringY + (481 * 0.5)}px;
			animation: rawgenius-ring-animation 10s ease-in-out infinite;
		}

		._rawgenius-ring,
		.rawgenius-planet,
		.rawgenius-star,
		.rawgenius-astronaut {
			fill: pink !important;
		}
        `;
		this.injectCSS(css);
	}


	convertTransform(value: string | null | undefined): { x: number; y: number; } {
		// translate(1612.144 615.962)
		let _x = 0;
		let _y = 0;

		if (value) {
			let array: Array<string> = value.replace('translate', '').replace('(', '').replace(')', '').split(' ');
			// console.log(array);
			_x = parseFloat(array[0]);
			_y = parseFloat(array[1]);

		}
		return {
			x: _x,
			y: _y
		}
	}

	injectCSS(css: string) {
		const style: HTMLStyleElement = document.createElement('style');
		style.type = 'text/css';
		style.id = 'foo';
		style.appendChild(document.createTextNode(css));
		if (document.getElementById('foo')) {
			console.warn('already?');

		}
		document.head.appendChild(style);
	}

	// Function to extract IDs from SVG text
	extractIDsFromSVG(svgText: string) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(svgText, 'image/svg+xml');
		const elementsWithIds = doc.querySelectorAll('[id]');
		const ids = Array.from(elementsWithIds).map(element => element.id);
		return ids;
	}

}
