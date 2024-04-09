import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-video-vimeo',
	templateUrl: './video-vimeo.component.html',
	styleUrls: ['./video-vimeo.component.scss']
})
export class VideoVimeoComponent implements OnInit {

	@Input() title: string = 'Video Vimeo player';
	@Input() src: string = 'https://player.vimeo.com/video/102770740?h=33bfa49d88&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';


	/**
	 * <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/803379240?h=694f7c2f4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="bw.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
	 */


	safeUrl!: any;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
	}

}
