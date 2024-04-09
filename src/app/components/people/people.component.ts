import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export interface IRoot {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

export interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export interface Geo {
	lat: string
	lng: string
}

export interface Company {
	name: string
	catchPhrase: string
	bs: string
}


@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

	data!: IRoot[];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		// could also be a file in the `03_json/public/data.json`
		const url = `https://jsonplaceholder.typicode.com/users`;
		this.http.get<IRoot[]>(url)
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
