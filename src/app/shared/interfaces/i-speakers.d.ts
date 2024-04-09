import { IAttributesBase } from "./i-attributes-base";
import { IMeta } from "./i-meta";
import { IPagination } from "./i-pagination";

export interface ISpeakers {
	data: Daum[];
	meta: IMeta;
}

export interface Daum {
	id: number;
	attributes: Attributes;
}

export interface Attributes extends IAttributesBase {
	name: string;
	description: string;
	company: string;
}

