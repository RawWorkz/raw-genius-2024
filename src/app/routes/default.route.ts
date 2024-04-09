
import { Routes } from "@angular/router";

import { HomePageComponent } from "../pages/home-page/home-page.component";

export const defaultRoutes: Routes = [
	{ path: "", title: "Home", component: HomePageComponent },
	{ path: "home", title: "Home", pathMatch: "full", redirectTo: "" },
];

