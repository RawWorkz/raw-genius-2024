import { Routes } from "@angular/router";

import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";
import { ScreensaverPageComponent } from "../pages/screensaver-page/screensaver-page.component";

export const fullscreenRoutes: Routes = [
	{ path: "fs-schedule", title: "Schedule", component: SchedulesPageComponent },
	{ path: "screensaver", title: "Screensaver", component: ScreensaverPageComponent },
];

