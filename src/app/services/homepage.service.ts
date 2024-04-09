import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HomepageService {

	constructor(
		private http: HttpClient,
	) { }

	getData(): Observable<any> {
		const url = `${environment.api_base_url}/api/homepage`;
		const observable: Observable<any> = this.http.get<any>(url);
		return observable;
	}

	getAllData() {
		const url = `${environment.api_base_url}/api/homepage?populate=*`;
		const observable: Observable<any> = this.http.get<any>(url);
		return observable;
	}

}
