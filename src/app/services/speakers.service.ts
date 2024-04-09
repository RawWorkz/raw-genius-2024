import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISpeakers } from '../shared/interfaces/i-speakers';

@Injectable({
	providedIn: 'root'
})
export class SpeakersService {

	constructor(
		private http: HttpClient,
	) { }

	getData(): Observable<ISpeakers> {
		const url = `${environment.api_base_url}/api/speakers`;
		const observable: Observable<ISpeakers> = this.http.get<ISpeakers>(url);
		return observable;
	}

	getAllData() {
		const url = `${environment.api_base_url}/api/speakers?populate=*`;
		const observable: Observable<any> = this.http.get<any>(url);
		return observable;
	}
}
