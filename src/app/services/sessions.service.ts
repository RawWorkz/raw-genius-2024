import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISessions } from '../shared/interfaces/i-sessions';

@Injectable({
	providedIn: 'root'
})
export class SessionsService {

	constructor(
		private http: HttpClient,
	) { }

	getData(): Observable<ISessions> {
		const url = `${environment.api_base_url}/api/sessions`;
		const observable: Observable<ISessions> = this.http.get<ISessions>(url);
		return observable;
	}

	getAllData() {
		const url = `${environment.api_base_url}/api/sessions?populate=*`;
		const observable: Observable<any> = this.http.get<any>(url);
		return observable;
	}

}
