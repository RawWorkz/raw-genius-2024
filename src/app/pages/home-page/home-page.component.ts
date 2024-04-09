import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { FeatureFlagsService } from 'src/app/services/feature-flags.service';
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

	speakerDate = new Date(2023, 4, 26);
	registerDate = new Date(2023, 4, 28);
	eventDate = new Date(2023, 5, 23);
	currentDate = new Date();

	fromRegister = 10;
	toRegister = 10;
	fromSpeaker = 10;
	toSpeaker = 10;
	fromEvent = 10;
	toEvent = 10;

	//
	isProduction = environment.production;
	isProductionText = environment.text;

	constructor(
		private dataService: DataService,
		public featureFlagService: FeatureFlagsService
	) { }

	ngOnInit(): void {

		// To calculate the time difference of two dates
		var difInTimeSpeaker = this.speakerDate.getTime() - this.currentDate.getTime();
		// To calculate the no. of days between two dates
		var difInDaysSpeaker = difInTimeSpeaker / (1000 * 3600 * 24);

		// To calculate the time difference of two dates
		var difInTimeRegister = this.registerDate.getTime() - this.currentDate.getTime();
		// To calculate the no. of days between two dates
		var difInDaysRegister = difInTimeRegister / (1000 * 3600 * 24);

		// To calculate the time difference of two dates
		var difInTimeEvent = this.eventDate.getTime() - this.currentDate.getTime();
		// To calculate the no. of days between two dates
		var difInDaysEvent = difInTimeEvent / (1000 * 3600 * 24);

		console.log(difInDaysSpeaker);
		console.log(difInDaysRegister);
		console.log(difInDaysEvent);


		this.fromRegister = Math.floor(difInDaysRegister) + 7;
		this.toRegister = Math.floor(difInDaysRegister);
		this.fromSpeaker = Math.floor(difInDaysSpeaker) + 7;
		this.toSpeaker = Math.floor(difInDaysSpeaker);
		this.fromEvent = Math.floor(difInDaysEvent) + 7;
		this.toEvent = Math.floor(difInDaysEvent);

		// this.fromRegister = 16;
		// this.toRegister = 11;
		// this.fromSpeaker = 15;
		// this.toSpeaker = 10;

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

	isFeatureEnabled(key: string) {
		return this.featureFlagService.isFeatureEnabled(key);
	}

	convertDate(date: Date) {
		var date = new Date(date);
		return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
	}


}
