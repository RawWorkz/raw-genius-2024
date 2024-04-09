import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/shared/interfaces/i-schedule';

@Component({
	selector: 'app-schedule-session-info',
	templateUrl: './schedule-session-info.component.html',
	styleUrls: ['./schedule-session-info.component.scss']
})
export class ScheduleSessionInfoComponent implements OnInit {

	@Input() session!: ISession | undefined;

	tags: { title: string, color: string }[] = [];

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(changes: SimpleChanges) {
		// console.log(changes);
		// console.log(this.session?.tags);
		if (!this.session) return;
		for (let i = 0; i < this.session.tags.length; i++) {
			const tag = this.session.tags[i];
			let obj: { title: string, color: string } = { title: '', color: '' };
			obj.title = tag;
			switch (tag.toLowerCase()) {
				case 'discussion':
					// console.log("Discussion");
					obj.color = 'text-bg-primary';
					break;
				case 'masterclass':
					// console.log("Masterclass");
					obj.color = 'text-bg-secondary';
					break;
				case 'tutorial':
					// console.log("Tutorial");
					obj.color = 'text-bg-success';
					break;
				case 'lecture':
					// console.log("Lecture");
					obj.color = 'text-bg-danger';
					break;
				case 'advertisement':
					// console.log("Advertisement");
					obj.color = 'text-bg-warning';
					break;
				case 'cloud':
					// console.log("Cloud");
					obj.color = 'text-bg-info';
					break;
				case 'aws':
					// console.log("AWS");
					obj.color = 'text-bg-light';
					break;
				default:
					console.log(`case '${tag.toLowerCase()}': console.log("${tag}"); break;`);
					break;
			}
			this.tags.push(obj);
		}

		this.tags.sort((a, b) => a.title.localeCompare(b.title));


	}


}
