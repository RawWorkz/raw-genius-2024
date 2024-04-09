import { IBtn } from "./i-btn"

export interface ICta {
	title: string;
	subtitle?: string;
	body: string;
	image: string;
	btn: IBtn;
}