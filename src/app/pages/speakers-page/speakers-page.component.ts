import { Component } from '@angular/core';
import { SpeakersService } from 'src/app/services/speakers.service';
import { ISpeakers } from 'src/app/shared/interfaces/i-speakers';

@Component({
	selector: 'app-speakers-page',
	templateUrl: './speakers-page.component.html',
	styleUrls: ['./speakers-page.component.scss']
})
export class SpeakersPageComponent {

	title = 'Speakers page';

	data!: ISpeakers;
	allData!: ISpeakers;

	constructor(
		private speakersService: SpeakersService,
	) { }


	ngOnInit() {
		this.speakersService.getData().subscribe({
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
		this.speakersService.getAllData().subscribe(data => {
			this.allData = data;
		});
	}
}
