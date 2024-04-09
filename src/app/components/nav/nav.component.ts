import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router, Routes } from "@angular/router";
import { Subscription } from 'rxjs';
import { fullscreenRoutes } from 'src/app/routes/fullscreen.route';
import { environment } from 'src/environments/environment';

import { AnchorRoutes, anchorRoutes } from "../../routes/anchor.route";
import { defaultRoutes } from "../../routes/default.route";
import { pagesRoutes } from "../../routes/pages.route";
import { pages2Routes } from "../../routes/pages2.route";
import { testRoutes } from "../../routes/test.route";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	defaultRoutes: Routes = defaultRoutes;
	pagesRoutes: Routes = pagesRoutes;
	pages2Routes: Routes = pages2Routes;
	fullscreenRoutes: Routes = fullscreenRoutes;
	testRoutes: Routes = testRoutes;
	anchorRoutes: AnchorRoutes[] = anchorRoutes;

	isProduction: boolean = environment.production;
	isRoot: boolean = false;

	routerSubsciption!: Subscription;

	constructor(
		private router: Router,
	) { }

	ngOnInit(): void {
		this.isRoot = this.router.url === '' || this.router.url === '/';
		this.routerSubsciption = this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				// perform actions on route change
				// console.log('Route changed');
				this.isRoot = this.router.url === '' || this.router.url === '/';
			}
		});
		// console.log(anchorRoutes);
	}

	ngOnDestroy(): void {
		this.routerSubsciption.unsubscribe();
	}

	onAnchorClickHandler(e: Event, anchor: AnchorRoutes) {
		e.preventDefault();
		console.log(anchor.title);
		// this.router.navigate([], { fragment: anchor.id });
		const element = document.querySelector(`#${anchor.id}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

}


