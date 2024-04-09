import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cta',
	templateUrl: './cta.component.html',
	styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

	@Input() title: string = 'Cta Example';
	@Input() body: string = 'Meld je aan voor de newsletter en blijf op de hoogte van de laatste projectontwikkelingen en investeringsmogelijkheden.';
	@Input() submit: string = 'Submit';
	@Input() placeholder: string = 'Your email address';

	constructor() { }

	ngOnInit(): void {
	}

}
