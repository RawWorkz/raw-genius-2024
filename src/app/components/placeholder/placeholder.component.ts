import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/config/constants';
import { IHero } from 'src/app/shared/interfaces/i-root';

@Component({
	selector: 'app-placeholder',
	templateUrl: './placeholder.component.html',
	styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

	@Input() title: string = 'Placeholder';
	@Input() id: string = 'placeholder';
	@Input() img: string = 'https://picsum.photos/id/56/1024/900/'; // 'https://picsum.photos/id/11/1024/900';

	constructor() { }

	ngOnInit(): void { }

}
