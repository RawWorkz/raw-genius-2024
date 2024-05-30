import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RawSessionsService } from 'src/app/services/raw-sessions.service';
import { IITimeline } from 'src/app/shared/models/data';

@Component({
    selector: 'app-schedule-time',
    templateUrl: './schedule-time.component.html',
    styleUrls: ['./schedule-time.component.scss']
})
export class ScheduleTimeComponent implements OnInit, OnDestroy {

    @Input() url: string = 'assets/rawworks_genius_2023_timetable.json';

    data!: IITimeline;
    errorMessage: string = '';

    currentTime: Date = new Date();

    currentRow!: HTMLTableRowElement;

    ISDEBUG: boolean = false;

    private intervalId: any;

    constructor(
        private sessionService: RawSessionsService
    ) { }


    ngOnInit(): void {
        this.getData();
        this.startPolling();
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    startPolling() {
        this.intervalId = setInterval(() => {
            // console.log('poll');
            this.getSize();
        }, 60000); // 60000 milliseconds = 60 seconds
    }

    getData() {
        this.sessionService.getData(this.url).subscribe({
            next: data => {
                // console.log(data);
                this.data = data;
                this.convertData(data);
                // make sure height is set, so we can use that to move it
                setTimeout(() => {
                    this.getSize();
                }, 1000);
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        });
    }

    /**
     * convert the time used, and map towards positions
     * @param data
     */
    convertData(data: IITimeline) {
        console.log(data);
    }

    getSize() {
        let el: HTMLElement = document.getElementById('app-schedule-table') as HTMLElement;
        console.log(el);
        console.log(el?.offsetHeight);

        // Get current time
        this.currentTime = new Date();

        var dd = String(this.currentTime.getDate()).padStart(2, '0');
        var mm = String(this.currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = this.currentTime.getFullYear();

        var formattedDate = mm + '/' + dd + '/' + yyyy;

        if (this.ISDEBUG) {
            this.currentTime = new Date(formattedDate + " " + "09:59"); // kickoff
            // this.currentTime = new Date(formattedDate + " " + "10:00");
            this.currentTime = new Date(formattedDate + " " + "10:46"); // switch
            this.currentTime = new Date(formattedDate + " " + "11:25"); // matthijs
            // this.currentTime = new Date(formattedDate + " " + "15:35");
            // this.currentTime = new Date(formattedDate + " " + "16:56"); // afronding
        }

        var formattedDate = mm + '/' + dd + '/' + yyyy;

        // Get all rows in the table
        var rows = document.getElementById('app-schedule-table')?.getElementsByTagName('tr');

        if (rows) {

            for (var i = 1; i < rows.length; i++) {
                // Get start and end time from the row
                var timeCell = rows[i].getElementsByTagName('td')[0];
                if (timeCell) {
                    var timeRange = timeCell.innerText.split(' - ');
                    var startTime = new Date(formattedDate + ' ' + timeRange[0]);
                    var endTime = new Date(formattedDate + ' ' + timeRange[1]);

                    // Check if current time is within the start and end time
                    if (this.currentTime >= startTime && this.currentTime < endTime) {
                        // Highlight the row
                        rows[i].className += ' highlight';
                        this.currentRow = rows[i];
                    }
                }
            }

            if (this.currentRow) {

                console.log(this.currentRow);
                // console.log(this.currentRow.rowIndex);
                console.log('offsetHeight: ' + this.currentRow.offsetHeight);
                console.log('offsetTop: ' + this.currentRow.offsetTop);
                console.log(document.body.clientHeight)


                let windowHeight = document.body.clientHeight;
                let rowHeight = this.currentRow.offsetHeight;
                let rowOffset = this.currentRow.offsetTop;

                let yValue = ((windowHeight - rowHeight) / 2) - rowOffset;


                el.style.top = `${yValue}px`;
            } else {
                console.warn('Te vroeg of te laat');

                // laat het gewoon maar in beeld zien
                let windowHeight = document.body.clientHeight;
                el.style.top = `${windowHeight / 2}px`;
            }

        }
    }
}
