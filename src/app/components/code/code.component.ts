import { Component, Input, OnChanges, OnInit } from '@angular/core';

/**
 * @example
 *
  <app-code data="foobar" [menu]="false"></app-code>
  <app-code data="{foo:bar}"></app-code>
  <app-code [data]="testJson"></app-code>
  <app-code [data]="products"></app-code>
  <app-code [data]="productsString"></app-code>
 */
@Component({
	selector: 'app-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, OnChanges {

	@Input() data!: any;
	@Input() menu: boolean = true;

	fileName = 'file-';
	dataStr!: string;
	inter: string = ''; // use for interface export

	constructor() { }

	filenameUpdate() {
		this.fileName = 'downloadfile-' + new Date().toISOString().split('T')[0];
	}

	download(content: string, fileName: string, contentType: string) {
		const a = document.createElement("a");
		const file = new Blob([content], { type: contentType });
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	}

	copy(data: string) {
		console.log('onCopyHandler');
		navigator.clipboard.writeText(data).then(function () {
			console.log('Async: Copying to clipboard was successful!');
		}, function (err) {
			console.error('Async: Could not copy text: ', err);
		});
	}

	onDownloadHandler() {
		this.filenameUpdate();
		this.download(JSON.stringify(this.data), `${this.fileName}.json`, "text/plain");
	}

	onCopyHandler() {
		this.copy(this.dataStr);
	}

	onJson2TsHandler() {
		this.onCopyHandler();
		window.open('https://transform.tools/json-to-typescript', '_blank');
	}

	onJsonConvertHandler() {
		// const json = JSON.parse(this.data);
		// this.sJson(JSON.parse(JSON.stringify({ 'foo': 1 })));
		this.inter = '';
		this.sJson(JSON.parse(this.data));
		console.log(this.inter);
		this.copy(this.inter);
	};

	/**
	 * absolutely experimental
	 *
	 * @param data
	 * @returns
	 */
	sJson(data: any) {
		// console.log(data);
		// console.log(typeof (data));

		if (Array.isArray(data)) {
			this.inter += '// array \n';
			this.sJson(data[0]);
			return;
		}

		if (typeof (data) === 'object') {
			this.inter += 'export interface RootObj { \n';
			for (const d in data) {
				// console.log(`${d}: ${data[d]}`);
				// console.log(`${d}: ${typeof (data[d])}; // ${data[d]}`);

				// check for array
				if (Array.isArray(data[d])) {

					this.inter += `\t${d}: Array<${typeof (data[d][0])}>; // ${JSON.stringify(data[d])}\n`;
				} else {
					this.inter += `\t${d}: ${typeof (data[d])}; // ${data[d]}\n`;
				}

			}
			this.inter += '} \n';

		}

		// let _data: {} = data;
		// for (const item of _data) {
		// 	console.log(item);

		// }

		// if (typeof (data) === 'object') this.sJson(data);
		// for (const obj of data) {
		// 	console.log(obj, typeof (obj));
		// }


	}

	setupData() {
		// console.log(typeof (this.data));
		if (typeof (this.data) !== 'string') {
			this.data = JSON.stringify(this.data, null, '  ');
		}
		this.dataStr = this.data;
	}

	ngOnInit(): void {
		this.setupData();
	}

	ngOnChanges(): void {
		this.setupData();
	}


}
