import { IContact } from "./i-contact";
import { IContactCompany } from "./i-contact-company";
import { ICta } from "./i-cta"
import { IEventInfo } from "./i-event-info";
import { ISocials } from "./i-socials"

export interface IRoot {
	eventInfo?: IEventInfo,
	contactCompany?: IContactCompany,
	hero?: IHero;
	cta?: ICta;
	features?: IFeature[];
	socials?: ISocials;
	contact?: IContact;
}

export interface IHero {
	cta: ICta;
}

export interface IFeature {
	cta: ICta;
}


