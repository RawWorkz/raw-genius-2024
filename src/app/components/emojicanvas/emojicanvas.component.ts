import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

/**
 * https://stackoverflow.com/questions/56312457/how-to-load-and-draw-emojis-on-canvas-efficiently
 * https://stackoverflow.com/questions/44426939/how-to-use-canvas-in-angular
 */
@Component({
	selector: 'app-emojicanvas',
	templateUrl: './emojicanvas.component.html',
	styleUrls: ['./emojicanvas.component.scss']
})
export class EmojicanvasComponent implements AfterViewInit {

	@Input() text: string = '🦄';
	@Input() name: string = 'emoji';
	@Input() size: number = 400; //px

	// its important myCanvas matches the variable name in the template
	@ViewChild('myCanvas')
	canvas!: ElementRef<HTMLCanvasElement>;
	context!: CanvasRenderingContext2D;

	ngAfterViewInit(): void {
		this.context = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
		// change dimention of the canvas
		this.canvas.nativeElement.width = this.size * 1.5;
		this.canvas.nativeElement.height = this.size * 1.5;

		// The size of the emoji is set with the font
		this.context.font = `${this.size}px serif`;
		// use these alignment properties for "better" positioning
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		// draw the emoji
		this.context.fillText(this.text, this.canvas.nativeElement.width / 2, this.canvas.nativeElement.height / 2);
	}

	downloadCanvasAsImage() {
		let downloadLink = document.createElement('a');
		downloadLink.setAttribute('download', `emoji_${this.name}.png`);
		// let canvas = document.getElementById('myCanvas');
		this.canvas.nativeElement.toBlob(function (blob) {
			let url = URL.createObjectURL(blob as Blob);
			downloadLink.setAttribute('href', url);
			downloadLink.click();
		});
	}

	getStyle(): string {
		return `font-size: ${this.size}px;`;
	}

}


