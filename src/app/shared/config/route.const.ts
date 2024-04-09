
// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RouteConstants {
	// app/scripts/controllers/devices.js
	public static devicesApi: string = '/devices/list';
	public static devicesDetailApi: string = '/devices/:id/:editMode';
	public static devicesStatusApi: string = '/devices/:id/status';
	public static devicesStatusPlApi: string = '/devices/:id/status/pl';
	public static devicesStatusTsApi: string = '/devices/:id/status/ts';
	public static devicesHistoryApi: string = '/devices/:id/history';
	public static devicesHistorySwitchingApi: string = '/devices/:id/history/switching';
	public static devicesHistorySwitchingBurninghoursApi: string = '/devices/:id/history/burninghours';
}