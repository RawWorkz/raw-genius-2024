
import { Routes } from "@angular/router";

import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { SchedulesPageComponent } from "../pages/schedules-page/schedules-page.component";

import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { EmojiPageComponent } from "../pages/emoji-page/emoji-page.component";
import { ETicketPageComponent } from "../pages/eticket-page/eticket-page.component";
import { LocationPageComponent } from "../pages/location-page/location-page.component";
import { PlattegrondPageComponent } from "../pages/plattegrond-page/plattegrond-page.component";
import { ProgramPageComponent } from "../pages/program-page/program-page.component";


export const pages2Routes: Routes = [
	// { path: "", title: "Home", component: HomePageComponent },
	{ path: "home", title: "Home", pathMatch: "full", redirectTo: "" },
	// { path: "emoji", title: "Emojis", component: EmojiPageComponent },
	{ path: "program", title: "Program", component: ProgramPageComponent },
	{ path: "locatie", title: "Locatie", component: LocationPageComponent },
	{ path: "plattegrond", title: "Plattegrond", component: PlattegrondPageComponent },
	{ path: "e-ticket", title: "E-Ticket", component: ETicketPageComponent },
];

