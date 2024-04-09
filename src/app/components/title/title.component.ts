import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

	@Input() title: string = 'test';
	@Input() subtitle: string = 'subtitle';


	url = '';

	constructor() { }

	ngOnInit(): void {
		if (this.title.indexOf('🚨') != -1) {
			// console.log('>> alert');
			this.title = this.title.replace('🚨', '');
			this.url = '/assets/images/emoji/emoji_alert.png';
		}
		if (this.title.indexOf('📅') != -1) {
			// console.log('>> emoji_cool');
			this.title = this.title.replace('📅', '');
			this.url = '/assets/images/emoji/emoji_calendar.png';
		}
		if (this.title.indexOf('😎') != -1) {
			// console.log('>> emoji_cool');
			this.title = this.title.replace('😎', '');
			this.url = '/assets/images/emoji/emoji_cool.png';
		}
		if (this.title.indexOf('🔈') != -1) {
			// console.log('>> emoji_speaker');
			this.title = this.title.replace('🔈', '');
			this.url = '/assets/images/emoji/emoji_speaker.png';
		}
		if (this.title.indexOf('🍿') != -1) {
			// console.log('>> emoji_speaker');
			this.title = this.title.replace('🍿', '');
			this.url = '/assets/images/emoji/emoji_popcorn.png';
		}
		if (this.title.indexOf('📍') != -1) {
			// console.log('>> emoji_speaker');
			this.title = this.title.replace('📍', '');
			this.url = '/assets/images/emoji/emoji_pin.png';
		}
		if (this.title.indexOf('🚃') != -1) {
			// console.log('>> emoji_speaker');
			this.title = this.title.replace('🚃', '');
			this.url = '/assets/images/emoji/emoji_schedule.png';
		}

		// this.url = '/assets/images/emoji/emoji_alert.png';
		// src/assets/images/emoji/emoji_calendar.png
		// src/assets/images/emoji/emoji_cool.png
		// src/assets/images/emoji/emoji_popcorn.png
		// src/assets/images/emoji/emoji_speaker.png
	}

	convertEmoji(emoji: string) {
		if (this.title.indexOf(emoji) != -1) {
			this.url = '/assets/images/emoji/emoji_popcorn.png';
		}
	}

}
