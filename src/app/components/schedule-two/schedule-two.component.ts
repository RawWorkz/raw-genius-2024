import { Component, Input } from '@angular/core';
import { RawSessionsService } from 'src/app/services/raw-sessions.service';
import { TimelineService } from 'src/app/services/timeline.service';
import { IITimeline } from 'src/app/shared/models/data';

@Component({
	selector: 'app-schedule-two',
	templateUrl: './schedule-two.component.html',
	styleUrls: ['./schedule-two.component.scss']
})
export class ScheduleTwoComponent {

	@Input() title: string = 'RawWorks ScheduleComponent';
	@Input() url: string = 'assets/rawworks_genius_2023_timetable.json';


	data!: IITimeline;
	errorMessage: string = '';

	tags: { title: string, color: string }[] = [];

	constructor(
		private sessionService: RawSessionsService
	) { }

	ngOnInit(): void {
		this.getData();
	}

	getData() {
		this.sessionService.getData(this.url).subscribe({
			next: data => {
				this.data = data;
				// console.log(data);
			},
			error: error => {
				this.errorMessage = error.message;
				console.error('There was an error!', error);
			}
		});
	}
}
