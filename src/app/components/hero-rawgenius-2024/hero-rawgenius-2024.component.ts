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
		let container = document.getElementById(this.containerID);
		if (container === null) return;
		let url = container.querySelector("img")?.src;
		// console.log(url);
		if (url === undefined) return;
		this.http.get(url, { responseType: 'text' }).subscribe({
			next(value) {
				console.log(value);
			},
			error(err) {
				console.log(err);

			},
		});


	}

}
