import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface IPhoto {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}


@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	data!: IPhoto[];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		const url = `https://jsonplaceholder.typicode.com/photos`;
		this.http.get<IPhoto[]>(url)
			.subscribe({
				next: (value) => {
					// console.log(value);
					this.data = value;
				},
				error: (err) => {
					console.error(err);
				},
				complete: () => {

				},
			});
	}

}
