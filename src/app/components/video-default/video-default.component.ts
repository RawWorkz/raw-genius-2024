import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-video-default',
	templateUrl: './video-default.component.html',
	styleUrls: ['./video-default.component.scss']
})
export class VideoDefaultComponent implements OnInit {

	@Input() title: string = "Video html player";
	@Input() url: string = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4";

	constructor() { }

	ngOnInit(): void {
	}

}
