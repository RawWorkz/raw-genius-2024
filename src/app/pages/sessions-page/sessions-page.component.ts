import { Component, OnInit } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';
import { ISessions } from 'src/app/shared/interfaces/i-sessions';

@Component({
	selector: 'app-sessions-page',
	templateUrl: './sessions-page.component.html',
	styleUrls: ['./sessions-page.component.scss']
})
export class SessionsPageComponent implements OnInit {

	title = 'Session page';

	data!: ISessions;
	allData!: ISessions;

	constructor(
		private sessionsService: SessionsService,
	) { }


	ngOnInit() {
		this.sessionsService.getData().subscribe({
			next: (data) => {
				console.info('::next');
				console.log(data);
				this.data = data;
			},
			error: (e) => {
				console.info('::error');
				console.error(e);
			},
			complete: () => {
				console.info('::complete');
			}
		});
		this.sessionsService.getAllData().subscribe(data => {
			this.allData = data;
		});
	}
}
