export interface IITimeline {
	start_date: string;
	end_date: string;
	description: string;
	description2: string;
	schedule: IISchedule[];
	// sessions: IISession[];
}

export interface IISchedule {
	_id: string;
	start_time: string;
	end_time: string;
	type: string;
	tag: string[];
	description: string;
	speakers?: string;
	location?: string;
}

export interface IISession {
	_id: string;
	description: string;
	speakers: string;
}
