import { IAttributesBase } from "./i-attributes-base";
import { IMeta } from "./i-meta";
import { IPagination } from "./i-pagination";

export interface ISessions {
	data: Daum[];
	meta: IMeta;
}

export interface Daum {
	id: number;
	attributes: Attributes;
}

export interface Attributes extends IAttributesBase {
	Title: string;
	Description: string;
}

