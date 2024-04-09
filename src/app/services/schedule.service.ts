import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IScheduleRoot } from '../shared/interfaces/i-schedule';

@Injectable({
	providedIn: 'root'
})
export class ScheduleService {

	private url = 'assets/dummydata/rawgenius.json';

	constructor(private http: HttpClient) { }

	getData() {
		return this.http.get<IScheduleRoot>(this.url);
	}

}
