import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/config/constants';
import { ISocials } from 'src/app/shared/interfaces/i-socials';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.component.html',
	styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

	title = "Socials";

	@Input() value: ISocials = Constants.SOCIALS;
	data!: { name: string, url: string }[];

	constructor() { }


	ngOnInit() {
		const obj = JSON.parse(JSON.stringify(this.value));
		this.data = Object.keys(obj).map(key => ({ name: key, url: obj[key] }))
	}

}
