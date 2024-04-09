import { ILocation } from "./i-contact-company";

export interface IEventInfo {
	title: string,
	subtitle: string,
	startDate: Date,
	endDate: Date,
	location: ILocation,
}
