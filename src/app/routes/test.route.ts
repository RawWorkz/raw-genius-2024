import { Routes } from "@angular/router";

import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { StyleguideButtonsComponent } from "../pages/styleguide-buttons/styleguide-buttons.component";

export const testRoutes: Routes = [
	{ path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	{ path: "styleguide-buttons", title: "Styleguide buttons", component: StyleguideButtonsComponent },
];
