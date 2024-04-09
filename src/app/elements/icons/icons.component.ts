import { Component, OnInit, Input, SimpleChanges } from '@angular/core';



/**
 * little icon create, based upon Ficons (https://ficons.fiction.com/reference.html)
 *
 * @example
 * <app-icons icon="fa-magic"></app-icons>
 * @example
 * <app-icons icon="fa-magic" size="3"></app-icons>
 */
@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: []
})
export class IconsComponent implements OnInit {

	@Input() icon!: string;
	@Input() size!: string; // default = 1, but can use 1,2,3,4

	constructor() { }

	ngOnInit(): void {
		this.init();
	}

	/**
	 * this is to check if translation values are here when changed
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges) {
		this.init();
	}

	/**
	 *
	 */
	init(): void {
		// set size string to ficons class
		this.setSize();
		// set icon
		this.setIcon();
	}

	/**
	 *
	 */
	setIcon(): void {
		// use as default
		if (this.icon == null) this.icon = '?';

		// when using `fa-xxx` we assume you know what you are talking about
		if (this.icon.indexOf('fa-') != -1) return;


		switch (this.icon.toLowerCase()) {
			case 'up': this.icon = 'fa-chevron-up'; break;

			// socials
			case 'facebook': this.icon = 'fa-facebook'; break;
			case 'linkedin': this.icon = 'fa-linkedin'; break;
			case 'insta':
			case 'instagram': this.icon = 'fa-instagram'; break;
			case 'youtube': this.icon = 'fa-youtube-square'; break;
			case 'twitter': this.icon = 'fa-twitter-square'; break;
			case 'github': this.icon = 'fa-github'; break;

			// rawGenius
			case 'arrow-right': this.icon = 'fa-arrow-right'; break;

			case "program":
			case 'programma': this.icon = 'fa-calendar-o'; break;
			case 'plattegrond': this.icon = 'fa-map-o'; break;
			case 'locatie': this.icon = 'fa-map-marker'; break;
			case 'e-ticket': this.icon = 'fa-ticket'; break;
			case 'emojis': this.icon = 'fa-smile-o'; break;


			// defaults
			case 'x': this.icon = 'fa-remove'; break;
			case 'home': this.icon = 'fa-home'; break;
			case 'create': this.icon = 'fa-pencil'; break;

			case '':
			case '?': this.icon = 'fa-question'; break;

			case 'tel': this.icon = 'fa-phone'; break;
			case 'map': this.icon = 'fa-map-marker'; break;
			case 'link': this.icon = 'fa-external-link'; break;

			// dark light
			case 'dark': this.icon = 'fa-moon-o'; break;
			case 'light': this.icon = 'fa-sun-o'; break;
			case 'auto': this.icon = 'fa-adjust'; break;

			case 'schedule': this.icon = 'fa-sliders'; break;
			case 'arrow-down': this.icon = 'fa-arrow-down'; break;
			case 'arrow-left': this.icon = 'fa-arrow-left'; break;
			case 'arrow-up': this.icon = 'fa-arrow-up'; break;



			case 'videooverviewpagecomponent': this.icon = 'fa-video-camera'; break;
			case 'herooverviewpagecomponent': this.icon = 'fa-send-o'; break;
			case 'timeline': this.icon = 'fa-th'; break;



			case 'styleguide buttons': this.icon = 'fa-magic'; break;
			case 'strapiapioverviewpagecomponent': this.icon = 'fa-question'; break;
			case 'svgtoggleoverviewpagecomponent': this.icon = 'fa-question'; break;


			// default buttons names
			case 'download': this.icon = 'fa-download'; break;
			case 'save': this.icon = 'fa-save'; break;
			case 'back': this.icon = 'fa-hand-o-left'; break; // fa-arrow-left
			case 'upload': this.icon = 'fa-upload'; break;
			case 'logs': this.icon = 'fa-archive'; break;
			case 'switch': this.icon = 'fa-toggle-on'; break;
			case 'save': this.icon = 'fa-save'; break;
			case 'cancel': this.icon = 'fa-times'; break;
			case 'info': this.icon = 'fa-info-circle'; break;
			case 'edit': this.icon = 'fa-edit'; break;
			case 'history': this.icon = 'fa-history'; break;
			case 'status': this.icon = 'fa-gears'; break;
			case 'create': this.icon = 'fa-plus'; break;
			case 'filter': this.icon = 'fa-filter'; break;

			case 'expand':
			case 'full-width':
			case 'fullwidth':
			case 'full':
			case 'full-screen':
			case 'fullscreen': this.icon = 'fa-expand'; break;
			case 'compress': this.icon = 'fa-compress'; break;

			case 'check':
			case 'checked': this.icon = 'fa-check-square-o'; break;
			case 'uncheck':
			case 'un-check':
			case 'un-checked':
			case 'unchecked': this.icon = 'fa-square-o'; break;

			case 'about': this.icon = 'fa-info-circle'; break;
			case 'dashboard': this.icon = 'fa-dashboard'; break;

			case 'styleguide': this.icon = 'fa-magic'; break;
			case 'users': this.icon = 'fa-users'; break;
			case 'contact': this.icon = 'fa-tablet'; break;

			case 'link':
			case 'external':
			case 'external-link': this.icon = 'fa-external-link'; break;

			case 'user':
			case 'profile': this.icon = 'fa-user-circle'; break;

			case 'home':
			case 'page home': this.icon = 'fa-home'; break;

			case 'about':
			case 'page about': this.icon = 'fa-info-circle'; break;

			case 'contact': this.icon = 'fa-volume-control-phone'; break;

			case 'help': this.icon = 'fa-hand-paper-o'; break;



			// only for now, remove in the future
			case 'level 2 page': this.icon = 'fa-circle'; break;

			default:
				console.log(`case '${this.icon.toLowerCase()}': this.icon = '${this.icon.toLowerCase()}'; break;`);
				this.icon = 'fa-remove';
				// https://ficons.fiction.com/reference.html
				break;
		}
	}


	private setSize(): void {
		switch (this.size) {
			case "2": this.size = "fa-2x"; break;
			case "3": this.size = "fa-3x"; break;
			case "4": this.size = "fa-4x"; break;
			default: this.size = ""; break;
		}
	}
}
