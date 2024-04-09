import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/config/constants';
import { FeatureEnum } from 'src/app/shared/enums/feature.enum';
import { ModeEnum } from 'src/app/shared/enums/mode.enum';
import { IHero } from 'src/app/shared/interfaces/i-root';

@Component({
	selector: 'app-hero-video-rawgenius',
	templateUrl: './hero-video-rawgenius.component.html',
	styleUrls: ['./hero-video-rawgenius.component.scss']
})
export class HeroVideoRawGeniusComponent implements OnInit {

	title = 'hero-video-rawgenius';

	@Input() value: IHero = Constants.HERO;

	@Input() mode: ModeEnum = ModeEnum.DARK;
	@Input() feature: FeatureEnum = FeatureEnum.MVP_2023;

	useFeatureEnum = FeatureEnum;

	constructor() { }

	ngOnInit(): void {
		// if (Constants.IS_DEBUG) {
		// 	this.value = JSON.parse(JSON.stringify(Constants.HERO));
		// 	this.value.cta.title = this.title;
		// }
	}

}
