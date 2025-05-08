import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Constants } from 'src/app/shared/config/constants';
import { IRoot } from 'src/app/shared/interfaces/i-root';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	data!: IRoot;

	registerDate = new Date(2024, 3, 30, 23, 59);
	eventDate = new Date(2025, 5, 20, 23, 59);
	currentDate = new Date();

	fromRegister = 10;
	toRegister = 10;
	fromEvent = 10;
	toEvent = 10;

	isProduction = environment.production;
	isProductionText = environment.text;

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {

		// To calculate the time difference of two dates
		var difInTimeRegister = this.registerDate.getTime() - this.currentDate.getTime();
		// To calculate the no. of days between two dates
		var difInDaysRegister = difInTimeRegister / (1000 * 3600 * 24);

		// To calculate the time difference of two dates
		var difInTimeEvent = this.eventDate.getTime() - this.currentDate.getTime();
		// To calculate the no. of days between two dates
		var difInDaysEvent = difInTimeEvent / (1000 * 3600 * 24);

		// console.log(difInDaysRegister);
		// console.log(difInDaysEvent);

		this.fromRegister = Math.floor(difInDaysRegister) + 7;
		this.toRegister = Math.floor(difInDaysRegister);
		this.fromEvent = Math.floor(difInDaysEvent) + 7;
		this.toEvent = Math.floor(difInDaysEvent);

		this.getData();
	}

	getData() {
		this.dataService.getData().subscribe({
			next: data => {
				this.data = data;
				Constants.data = data;
			},
			error: error => {
				// this.errorMessage = error.message;
				console.error('There was an error!', error);
			}
		});
	}

	convertDate(date: Date) {
		var date = new Date(date);
		return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
	}


}
