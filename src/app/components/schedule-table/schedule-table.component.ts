import { Component, Input } from '@angular/core';
import { RawSessionsService } from 'src/app/services/raw-sessions.service';
import { IITimeline } from 'src/app/shared/models/data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent {

  @Input() url: string = 'assets/rawworks_genius_2023_timetable.json';

  data!: IITimeline;
  errorMessage: string = '';

  tags: { title: string, color: string }[] = [];

  constructor(
    private sessionService: RawSessionsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.sessionService.getData(this.url).subscribe({
      next: data => {
        this.data = data;
        // console.log(data);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}
