import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/config/constants';
import { IContact } from 'src/app/shared/interfaces/i-contact';


@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

	@Input() data: IContact = Constants.CONTACT;

	constructor() { }

	ngOnInit(): void {
	}

}
