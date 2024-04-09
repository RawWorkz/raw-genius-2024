import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IISchedule, IITimeline } from 'src/app/shared/models/data';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

	title = 'RawWorks ScheduleComponent';

	data!: IITimeline;
	errorMessage: string = '';

	tags: { title: string, color: string }[] = [];

	constructor(
		private timelineService: TimelineService
	) { }

	ngOnInit(): void {
		this.getData();
	}


	getData() {
		this.timelineService.getData().subscribe({
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

	// getDescription(schedule: IISchedule) {
	// 	let str = schedule.description;
	// 	if (this.data) {
	// 		if (schedule._id != '') {
	// 			for (let i = 0; i < this.data.sessions.length; i++) {
	// 				const session = this.data.sessions[i];
	// 				if (schedule._id == session._id) {
	// 					str = session.description;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return str;
	// }

	// getSpeaker(schedule: IISchedule) {
	// 	let str = schedule.speakers;
	// 	if (this.data) {
	// 		if (schedule._id != '') {
	// 			for (let i = 0; i < this.data.sessions.length; i++) {
	// 				const session = this.data.sessions[i];
	// 				if (schedule._id == session._id) {
	// 					str = session.speakers;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return str;
	// }

}
