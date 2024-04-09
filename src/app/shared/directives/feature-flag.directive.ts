import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from 'src/app/services/feature-flags.service';

@Directive({
	selector: '[featureFlag]'
})
export class FeatureFlagDirective implements OnInit {

	@Input() featureFlag!: string;

	constructor(
		private tpl: TemplateRef<any>,
		private vcr: ViewContainerRef,
		private featureFlagService: FeatureFlagsService,
	) { }

	ngOnInit(): void {
		const isEnabled =
			this.featureFlagService.isFeatureEnabled(this.featureFlag) || false;
		if (isEnabled) {
			this.vcr.createEmbeddedView(this.tpl);
		}
	}

}
