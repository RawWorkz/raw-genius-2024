import { Component, Inject, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	@Input() props: any

	safeUrl!: SafeResourceUrl;

	constructor(
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		// this.contact = this.props.value;
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.openstreetmap.org/export/embed.html?bbox=5.7882821559906015%2C53.20205150834955%2C5.790792703628541%2C53.20332875984497&layer=mapnik");
	}

}
