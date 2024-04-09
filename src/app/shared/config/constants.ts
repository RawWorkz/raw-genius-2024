// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContact } from '../interfaces/i-contact';
import { IHero, IRoot } from '../interfaces/i-root';
import { ISocials } from '../interfaces/i-socials';

@Injectable({
	providedIn: 'root'
})
export class Constants {

	public readonly API_ENDPOINT: string = 'domain/api';
	public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';

	public static data: IRoot;

	// default values for components
	public static HERO: IHero = {
		"cta": {
			"title": "Punny headline 2",
			"subtitle": "Punny headline 2",
			"body": "!! And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple' s marketing pages.",
			"image": "https://picsum.photos/id/103/1024/900",
			"btn": {
				"title": "Superman pose",
				"url": "#footer",
				"target": ""
			}
		}
	};
	public static SOCIALS: ISocials = {
		"facebook": "https://www.facebook.com/rawworksnlr",
		"linkedin": "https://www.linkedin.com/company/rawworks/",
		"twitter": "https://twitter.com/RawWorksNL",
		"youtube": "https://www.youtube.com/channel/UCVino-GQxOPNNtnnk2PDBOg"
	};
	public static CONTACT: IContact = {
		"firstname": "Matthijs",
		"lastname": "Kamstra",
		"street": "Oldehoofsterkerkhof",
		"city": "Leeuwarden",
		"zipcode": "8911 DE",
		"country": "Netherlands",
		"kvk": "KvK. 121212121",
		"email": "foo@bar.com",
		"mobile": "06 12345678",
		"phone": "020 2345678"
	};

	public static IS_DEBUG: boolean = (environment.production != true) ? true : false;

	/**
	 * redirect values
	 */
	public static REDIRECT_AFTER_LOGIN: string = '/home';
	public static REDIRECT_LOGIN: string = '/login';
	public static REDIRECT_AFTER_GROUPS_CREATE: string = '/groups';

	//
	public static dummyMessage: string = 'Hello Dummy!';


}


