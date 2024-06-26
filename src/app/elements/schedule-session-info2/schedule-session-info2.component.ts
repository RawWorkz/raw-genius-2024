import { Component, Input, SimpleChanges } from '@angular/core';
import { IISchedule } from 'src/app/shared/models/data';

@Component({
	selector: 'app-schedule-session-info2',
	templateUrl: './schedule-session-info2.component.html',
	styleUrls: ['./schedule-session-info2.component.scss']
})
export class ScheduleSessionInfo2Component {

	@Input() schedule!: IISchedule;

	tags: { title: string, color: string }[] = [];

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(changes: SimpleChanges) {
		// console.log(changes);
		// console.log(this.session?.tags);
		if (!this.schedule) return;

		if (this.schedule.description == this.schedule.speakers) {
			this.schedule.speakers = '';
		}
		for (let i = 0; i < this.schedule.tag.length; i++) {
			const tag = this.schedule.tag[i];
			let obj: { title: string, color: string } = { title: '', color: '' };
			obj.title = tag;
			switch (tag.toLowerCase()) {
				case 'discussion':
				case 'ai':
					// console.log("Discussion");
					obj.color = 'text-bg-primary';
					break;
				case 'voetbal':
				case 'masterclass':
				case 'workspace':
					// console.log("Masterclass");
					obj.color = 'text-bg-secondary';
					break;
				case 'misc':
				case 'tutorial':
				case 'hr':
				case 'rawfit':
				case 'platform':
					// console.log("Tutorial");
					obj.color = 'text-bg-success';
					break;
				case 'codekunstenaar':
				case 'lecture':
				case 'digital':
				case 'security':
					// console.log("Lecture");
					obj.color = 'text-bg-danger';
					break;
				case 'advertisement':
				case 'drinks':
				case 'diner':
				case 'food':
					// console.log("Advertisement");
					obj.color = 'text-bg-warning';
					break;
				case 'cloud':
				case 'aws':
				case 'azure':
					// console.log("Cloud");
					obj.color = 'text-bg-info';
					break;
				// // console.log("AWS");
				// obj.color = 'text-bg-light';
				// break;
				case '':
					// console.log('empty');
					break;
				default:
					obj.color = 'text-bg-light';
					console.log(`case '${tag.toLowerCase()}': console.log("${tag}"); break;`);
					break;
			}
			this.tags.push(obj);
		}

		this.tags.sort((a, b) => a.title.localeCompare(b.title));


	}
}
