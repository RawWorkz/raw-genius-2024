import { Routes } from "@angular/router";

import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";

export const fullscreenRoutes: Routes = [
	{ path: "fs-schedule", title: "Schedule", component: SchedulesPageComponent },
];

