import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoot } from '../shared/interfaces/i-root';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private url = 'assets/spa.json?';

	constructor(private http: HttpClient) { }

	getData() {
		return this.http.get<IRoot>(this.url);
	}
}
