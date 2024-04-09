import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IITimeline } from '../shared/models/data';

@Injectable({
	providedIn: 'root'
})
export class RawSessionsService {

	private url = 'assets/rawworks_genius_2023_timetable.json';
	private url_saturday = 'assets/rawworks_genius_2023_timetable_saturday.json';

	constructor(
		private http: HttpClient
	) { }

	getData(url?: string) {
		if (url != null) {
			this.url = url;
		}
		var today = new Date();
		today.toISOString().substring(0, 10);
		return this.http.get<IITimeline>(this.url + '?d=' + today.toISOString().substring(0, 10));
	}
}
