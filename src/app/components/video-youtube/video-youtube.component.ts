import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-video-youtube',
	templateUrl: './video-youtube.component.html',
	styleUrls: ['./video-youtube.component.scss']
})
export class VideoYoutubeComponent implements OnInit {

	@Input() title: string = 'Video Youtube player';
	@Input() src: string = 'https://www.youtube-nocookie.com/embed/qCtUORuHj48';

	safeUrl!: any;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
	}
}
