import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { IRooms, ISchedule, IScheduleRoot } from 'src/app/shared/interfaces/i-schedule';


@Component({
	selector: 'app-schedules-page',
	templateUrl: './schedules-page.component.html',
	styleUrls: ['./schedules-page.component.scss']
})
export class SchedulesPageComponent implements OnInit {


	title = 'RawWorks ScheduleComponent';

	data!: IScheduleRoot;
	tableData!: {
		roomName: string;
		schedule: ISchedule[];
	}[];
	rooms!: IRooms[];
	slots!: any;

	errorMessage: string = '';

	constructor(private scheduleService: ScheduleService) { }

	ngOnInit(): void {
		this.getData();

	}

	getData() {
		this.scheduleService.getData().subscribe({
			next: data => {
				this.data = data;
				console.log(data);
				console.log(data.rooms);

				this.rooms = data.rooms;

				this.tableData = data.rooms.map(room => ({
					roomName: room.name,
					schedule: room.schedule.map(schedule => ({
						title: schedule.title,
						uuid: schedule.uuid,
						time: schedule.time,
						session: schedule.session
						// description: schedule.session?.description,
						// tags: schedule.session?.tags.join(', ')
					}))
				}));
			},
			error: error => {
				this.errorMessage = error.message;
				console.error('There was an error!', error);
			}
		});
	}






	onFullScreenClickHandler() {
		console.log(window.document.fullscreenEnabled);
		console.log(window.document.fullscreenElement);

		if (!window.document.fullscreenElement) {

			document.body.requestFullscreen();
		} else {
			window.document.exitFullscreen();
		}
	}


}
