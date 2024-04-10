import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { Col2Component } from './components/col2/col2.component';
import { ContactComponent } from './components/contact/contact.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { PeopleComponent } from './components/people/people.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TitleComponent } from './components/title/title.component';
import { VideoDefaultComponent } from './components/video-default/video-default.component';
import { VideoVimeoComponent } from './components/video-vimeo/video-vimeo.component';
import { VideoYoutubeComponent } from './components/video-youtube/video-youtube.component';

// elements
import { AddressComponent } from './elements/address/address.component';
import { AnchorComponent } from './elements/anchor/anchor.component';
import { Btn2topComponent } from './elements/btn2top/btn2top.component';
import { CountTriggerComponent } from './elements/count-trigger/count-trigger.component';
import { CountComponent } from './elements/count/count.component';
import { IconsComponent } from './elements/icons/icons.component';
import { InfoComponent } from './elements/info/info.component';
import { SocialsComponent } from './elements/socials/socials.component';

// pages
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';

// misc
import { CalendarIcsComponent } from './components/calendar-ics/calendar-ics.component';
import { CodeComponent } from './components/code/code.component';
import { Contact3Component } from './components/contact3/contact3.component';
import { CtaAlertComponent } from './components/cta-alert/cta-alert.component';
import { CtaSpeakersComponent } from './components/cta-speakers/cta-speakers.component';
import { EmojicanvasComponent } from './components/emojicanvas/emojicanvas.component';
import { HelloTwoComponent } from './components/hello-two/hello-two.component';
import { HeroRawGenius2024Component } from './components/hero-rawgenius-2024/hero-rawgenius-2024.component';
import { LocationEventComponent } from './components/location-event/location-event.component';
import { LocationSleepComponent } from './components/location-sleep/location-sleep.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { ScheduleTwoComponent } from './components/schedule-two/schedule-two.component';
import { SpringboardComponent } from './components/springboard/springboard.component';
import { DebugIdComponent } from './elements/debug-id/debug-id.component';
import { ScheduleSessionInfoComponent } from './elements/schedule-session-info/schedule-session-info.component';
import { ScheduleSessionInfo2Component } from './elements/schedule-session-info2/schedule-session-info2.component';
import { AuthorisedLayoutComponent } from './layouts/authorised/authorised-layout/authorised-layout.component';
import { FullscreenLayoutComponent } from './layouts/fullscreen/fullscreen-layout/fullscreen-layout.component';
import { PublicLayoutComponent } from './layouts/public/public-layout/public-layout.component';
import { EmojiPageComponent } from './pages/emoji-page/emoji-page.component';
import { ETicketPageComponent } from './pages/eticket-page/eticket-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { PlattegrondPageComponent } from './pages/plattegrond-page/plattegrond-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { SchedulesPageComponent } from './pages/schedules-page/schedules-page.component';
import { SessionsPageComponent } from './pages/sessions-page/sessions-page.component';
import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';
import { StyleguideButtonsComponent } from './pages/styleguide-buttons/styleguide-buttons.component';
import { DebugDirective } from './shared/directives/debug.directive';




@NgModule({
	declarations: [
		AboutPageComponent,
		AddressComponent,
		AnchorComponent,
		AppComponent,
		AuthorisedLayoutComponent,
		Btn2topComponent,
		CalendarIcsComponent,
		CodeComponent,
		Col2Component,
		ColorsComponent,
		Contact3Component,
		ContactComponent,
		CountComponent,
		CountTriggerComponent,
		CtaComponent,
		DebugDirective,
		DebugIdComponent,
		FooterComponent,
		FullscreenLayoutComponent,
		GalleryComponent,
		HelloTwoComponent,
		HeroRawGenius2024Component,
		HomePageComponent,
		IconsComponent,
		InfoComponent,
		NavComponent,
		NotFoundPageComponent,
		PeopleComponent,
		PlaceholderComponent,
		PublicLayoutComponent,
		QuoteComponent,
		ScheduleComponent,
		ScheduleSessionInfoComponent,
		SchedulesPageComponent,
		SessionsPageComponent,
		SocialsComponent,
		SpeakersPageComponent,
		SponsorsComponent,
		StyleguideButtonsComponent,
		StyleguideComponent,
		TestimonialsComponent,
		TitleComponent,
		VideoDefaultComponent,
		VideoVimeoComponent,
		VideoYoutubeComponent,
		EmojicanvasComponent,
		EmojiPageComponent,
		CtaAlertComponent,
		CtaSpeakersComponent,
		ScheduleSessionInfo2Component,
		LocationEventComponent,
		LocationSleepComponent,
		ScheduleTwoComponent,
		SpringboardComponent,
		ETicketPageComponent,
		ProgramPageComponent,
		PlattegrondPageComponent,
		LocationPageComponent,
		OffcanvasComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		DebugDirective,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
