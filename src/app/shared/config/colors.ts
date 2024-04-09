// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ColorItem {
	name: string;
	color: string;
}

@Injectable({
	providedIn: 'root'
})
export class Colors {


	public static colors: ColorItem[] = [
		{
			name: 'Yellow',
			color: '#FFFF00'
		}, {
			name: 'Yellow-green',
			color: '#94BF71'
		}, {
			name: 'Green',
			color: '#6FF005'
		}, {
			name: 'Teal',
			color: '#089C8A'
		}, {
			name: 'Blue',
			color: '#0419B8'
		}, {
			name: 'Purple',
			color: '#7304B8'
		}, {
			name: 'Violet',
			color: '#B905F5'
		}, {
			name: 'Red',
			color: '#F50505'
		}, {
			name: 'Orange',
			color: '#FF9124'
		}, {
			name: 'Amber',
			color: '#FFD724'
		}
	];

}


