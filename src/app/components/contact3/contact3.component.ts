import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { IContactCompany } from 'src/app/shared/interfaces/i-contact-company';
import { IEventInfo } from 'src/app/shared/interfaces/i-event-info';

@Component({
	selector: 'app-contact3',
	templateUrl: './contact3.component.html',
	styleUrls: ['./contact3.component.scss']
})
export class Contact3Component implements OnInit {

	@Input() props: any;

	@Input() data!: IEventInfo;

	safeUrl!: SafeResourceUrl;

	constructor(
		private sanitizer: DomSanitizer
	) { }


	/**
	 * <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
	 * src="https://www.openstreetmap.org/export/embed.html?bbox=5.530162453651429%2C52.26719056535488%2C5.533187985420228%2C52.268741716338816&amp;layer=mapnik&amp;marker=52.267966147630716%2C5.531675219535828" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=52.26797&amp;mlon=5.53168#map=19/52.26797/5.53168">View Larger Map</a></small>
	 */
	/**
	 * visit:
	 *
	 * use html
	 * get iframe
	 * get url
	 */
	ngOnInit() {
		const url = 'https://www.openstreetmap.org/export/embed.html?bbox=5.530162453651429%2C52.26719056535488%2C5.533187985420228%2C52.268741716338816&amp;layer=mapnik&amp;marker=52.267966147630716%2C5.531675219535828';
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
