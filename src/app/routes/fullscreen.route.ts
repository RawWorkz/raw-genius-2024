import { Routes } from "@angular/router";

import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";
import { ScreensaverPageComponent } from "../pages/screensaver-page/screensaver-page.component";
import { TimeSchedulePageComponent } from "../pages/time-schedule-page/time-schedule-page.component";

export const fullscreenRoutes: Routes = [
	{ path: "fs-schedule", title: "Schedule", component: SchedulesPageComponent },
	{ path: "screensaver", title: "Screensaver", component: ScreensaverPageComponent },
	{ path: "timeschedule", title: "TimeSchedule", component: TimeSchedulePageComponent },
];

