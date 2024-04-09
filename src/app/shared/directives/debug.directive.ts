import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * create a debug panel, which will not appear when in production
 *
 * @example
 *
 * ```ts
	<div debug>
		This element has an ID of #debug added to it in development mode.
	</div>
 * ```
 */
@Directive({
	selector: '[debug]'
})
export class DebugDirective {

	isProduction: boolean = environment.production;

	constructor(private el: ElementRef, private renderer: Renderer2) {
		if (!this.isProduction) {
			el.nativeElement.id = 'debug';
			renderer.setAttribute(el.nativeElement, 'debug-container', 'This debug-container is not present in production')
			el.nativeElement.title = 'This debug-container is not present in production';
			const classesToAdd = ['container-debug', 'alert', 'alert-danger', 'debug-class'];
			classesToAdd.forEach(className => renderer.addClass(el.nativeElement, className));

			// renderer.addClass(el.nativeElement, 'container-debug');
			// alert alert-danger debug-class');
		} else {
			this.renderer.removeChild(el.nativeElement.parentNode, el.nativeElement);
		}
	}
}
