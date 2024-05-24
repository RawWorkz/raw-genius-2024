import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rawgenius-animation-svg',
    templateUrl: './rawgenius-animation-svg.component.html',
    styleUrls: ['./rawgenius-animation-svg.component.scss']
})
export class RawgeniusAnimationSvgComponent implements OnInit {

    title = 'app-rawgenius-animation-svg';

    containerID = "container-hero-svg3";

    ISDEBUG = false;

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
                if (scope.ISDEBUG) console.log(data);
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
        if (this.ISDEBUG) console.log(this.extractIDsFromSVG(data));

        let starID = 'path127';
        let planetID = 'g140';
        let ringID = 'g141';
        let astronautID = 'image141';

        document.getElementById(starID)?.setAttribute('class', 'rawgenius-star');
        document.getElementById(planetID)?.setAttribute('class', 'rawgenius-planet');
        document.getElementById(ringID)?.setAttribute('class', 'rawgenius-ring');
        document.getElementById(astronautID)?.setAttribute('class', 'rawgenius-astronaut');

        // let transformRing = document.getElementById(ringID)?.getAttribute('transform'); // translate(1612.144 615.962)
        // let posRing: { x: number, y: number } = this.convertTransform(transformRing);
        // let ringX = posRing.x;
        // let ringY = posRing.y;
        // console.log(posRing);

        // let transformPlanet = document.getElementById(planetID)?.getAttribute('transform'); // translate(1612.144 615.962)
        // let posPlanet: { x: number, y: number } = this.convertTransform(transformPlanet);
        // let planetX = posPlanet.x;
        // let planetY = posPlanet.y;
        // console.log(posPlanet);

        let planetObj = this.getDataFrom(document.getElementById(planetID));
        if (this.ISDEBUG) console.log(planetObj);
        let ringObj = this.getDataFrom(document.getElementById(ringID));
        if (this.ISDEBUG) console.log(ringObj);
        let astronautObj = this.getDataFrom(document.getElementById(astronautID));
        if (this.ISDEBUG) console.log(astronautObj);
        let starObj = this.getDataFrom(document.getElementById(starID));
        if (this.ISDEBUG) console.log(starObj);


        this.wrapElementWithGroup(document.getElementById(starID), 'rawgenius-star-id', 'rawgenius-star-wrapper');
        this.wrapElementWithGroup(document.getElementById(astronautID), 'rawgenius-astronaut-id', 'rawgenius-astronaut-wrapper-x');
        this.wrapElementWithGroup(document.getElementById('rawgenius-astronaut-id'), '', 'rawgenius-astronaut-wrapper-y');

        // inject css
        // Inject CSS
        const css = `

		:root {
			--planet-x: ${planetObj.x}px;
			--planet-y: ${planetObj.y}px;
			--ring-x: ${ringObj.x}px;
			--ring-y: ${ringObj.y}px;
			--astronaut-x: ${astronautObj.x}px;
			--astronaut-y: ${astronautObj.y}px;
			--star-x: ${starObj.x}px;
			--star-y: ${starObj.y}px;
		}

		@keyframes rawgenius-planet-animation {
			0% {
				transform: translate(var(--planet-x), calc(var(--planet-y) + 2%)) rotate(+0deg);
			}
			50% {
				transform: translate(var(--planet-x), calc(var(--planet-y) - 2%)) rotate(-0deg);
			}
			100% {
				transform: translate(var(--planet-x), calc(var(--planet-y) + 2%)) rotate(0deg);
			}
		}

		@keyframes rawgenius-ring-animation {
			0% {
				transform: translate(var(--ring-x), calc(var(--ring-y) + 2%)) rotate(-0deg);
			}
			50% {
				transform: translate(var(--ring-x), calc(var(--ring-y) - 2%)) rotate(+0deg);
			}
			100% {
				transform: translate(var(--ring-x), calc(var(--ring-y) + 2%)) rotate(-0deg);
			}
		}

		@keyframes rawgenius-astronaut-animation {
			0% {
				transform: rotate(-10deg);
			}
			50% {
				transform: rotate(+10deg);
			}
			100% {
				transform: rotate(-10deg);
			}
		}


		@keyframes _______rawgenius-ring-animation {
			0% {
				transform: translate(${ringObj.x + 1}px, ${ringObj.y + 1}px) rotate(-2deg);
			}
			50% {
				transform: translate(${ringObj.x}px, ${ringObj.y - 1}px) rotate(2deg);
			}
			100% {
				transform: translate(${ringObj.x}px, ${ringObj.y + 1}px) rotate(-2deg);
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
			_ringx: ${ringObj.x};
			_ringy: ${ringObj.y};
			transform-origin: ${ringObj.x + (ringObj.w * 0.5)}px ${ringObj.y + (ringObj.h * 0.5)}px;
			animation: rawgenius-ring-animation 10s ease-in-out infinite;
		}

		.rawgenius-planet {
			opacity: 1.0 !important;
			transform-origin: ${planetObj.x + (planetObj.w * 0.5)}px ${planetObj.y + (planetObj.h * 0.5)}px;
			animation: rawgenius-planet-animation 12s ease-in-out infinite;
		}

		.rawgenius-astronaut {
			opacity: 1.0 !important;
			// transform-origin: center;
			transform-origin: ${astronautObj.x + (astronautObj.w * 0.5)}px ${astronautObj.y + (astronautObj.h * 0.5)}px;
			animation: rawgenius-astronaut-animation 20s ease-in-out infinite;
		}

		.rawgenius-star {
			// opacity: 1.0 !important;
			// transform-origin: ${(starObj.w * 0.5)}px ${(starObj.h * 0.5)}px;
			// transform: rotate(0deg);

		}


        `;
        this.injectCSS(css);
    }

    // Function to extract IDs from SVG text
    extractIDsFromSVG(svgText: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const elementsWithIds = doc.querySelectorAll('[id]');
        const ids = Array.from(elementsWithIds).map(element => element.id);
        return ids;
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



    wrapElementWithGroup(el: HTMLElement | null, id: string = '', className: string = '') {
        if (el === null) return;
        // Create a new group element
        var svgNS = "http://www.w3.org/2000/svg";
        var group = document.createElementNS(svgNS, 'g');

        // Set attributes for the group (optional)
        group.setAttribute('id', id);
        group.setAttribute('class', className);
        // group.setAttribute('transform', 'translate(50, 50)'); // Example transformation


        // Move the SVG element into the group
        var parent = el.parentNode;
        if (parent) {

            parent.replaceChild(group, el);
            group.appendChild(el);

            // Append the group to the SVG
            parent.appendChild(group);
        }
    }

    getDataFrom(el: HTMLElement | null): { _id: string, x: number, y: number, w: number, h: number } {
        let value = { _id: '', x: 0, y: 0, w: 0, h: 0 }
        if (!el) return value;

        if (this.ISDEBUG) console.group('get data from element');
        if (this.ISDEBUG) console.log(el);

        let ii = el.getAttribute('id');
        let ww = el.getAttribute('width');
        let hh = el.getAttribute('height');
        let xx = el.getAttribute('x');
        let yy = el.getAttribute('y');

        if (ii) {
            value._id = (ii);
        }
        if (ww) {
            value.w = parseFloat(ww);
        }
        if (hh) {
            value.h = parseFloat(hh);
        }
        if (xx) {
            value.x = parseFloat(xx);
        }
        if (yy) {
            value.y = parseFloat(yy);
        }


        let transform = el.getAttribute('transform');
        if (transform) {
            let array: Array<string> = transform.replace('translate', '').replace('(', '').replace(')', '').split(' ');
            // console.log(array);
            value.x = parseFloat(array[0]);
            value.y = parseFloat(array[1]);
        }
        let domRect: DOMRect = el.getBoundingClientRect();
        if (this.ISDEBUG) console.log(domRect);
        // console.log(el.getBoundingClientRect());
        // console.log(el.offsetWidth);
        // console.log(el.offsetHeight);
        if (domRect) {
            value.w = domRect.width;
            value.h = domRect.height;
        }

        if (this.ISDEBUG) console.groupEnd();

        return value;
    }

    /**
     * @deprecated
     *
     * @param value
     * @returns
     */
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

}
