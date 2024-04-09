export interface IScheduleRoot {
	rooms: Array<IRooms>; // rooms: Rooms[];
	created: string;
	date: string;
}

export interface IRooms {
	name: string;
	schedule: Array<ISchedule>; // schedule: Schedule[];
}

export interface ISchedule {
	title: string;
	uuid: string;
	time: ITime;
	session?: ISession;
}

export interface ITime {
	start: string;
	end: string;
	total: string;
}

export interface ISession {
	description: string;
	title: string;
	speaker: ISpeaker;
	tags: Array<string>; // tags: string[];
}

export interface ISpeaker {
	name: string;
	surname: string;
	uuid: string;
	id: string;
	image: IImage;
}

export interface IImage {
	banner: string;
	thumb: string;
	large: string;
}


