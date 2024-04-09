import { IAddress } from "./i-adress";

export interface ILocation {
	name: string,
	url: string,
	email?: string,
	address: IAddress,
}



export interface IContactCompany {
	name: string,
	phone: string,
	url: string,
	email?: string,
	address: IAddress,
}
