import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorisedLayoutComponent } from "./layouts/authorised/authorised-layout/authorised-layout.component";
import { FullscreenLayoutComponent } from "./layouts/fullscreen/fullscreen-layout/fullscreen-layout.component";
import { PublicLayoutComponent } from "./layouts/public/public-layout/public-layout.component";

import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

import { defaultRoutes } from "./routes/default.route";
import { fullscreenRoutes } from "./routes/fullscreen.route";
import { pagesRoutes } from "./routes/pages.route";
import { secureRoutes } from "./routes/secure.route";
import { testRoutes } from "./routes/test.route";

const DEFAULT_ROUTES = [...defaultRoutes];
const TEST_ROUTES = [...testRoutes];
const PAGES_ROUTES = [...pagesRoutes];

const SECURE_ROUTES = [...secureRoutes];
const PUBLIC_ROUTES = [...defaultRoutes, ...testRoutes, ...pagesRoutes];
const FULLSCREEN_ROUTES = [...fullscreenRoutes];


const routes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: PUBLIC_ROUTES
	},
	{
		path: '',
		component: FullscreenLayoutComponent,
		children: FULLSCREEN_ROUTES,
	},
	// {
	// 	path: '',
	// 	component: AuthorisedLayoutComponent,
	// 	canActivate: [GuardService],
	// 	children: SECURE_ROUTES,
	// },
	// ...DEFAULT_ROUTES,
	// ...TEST_ROUTES,
	// ...PAGES_ROUTES,
	{ path: "**", title: "oeps", component: NotFoundPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

