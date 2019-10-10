import { InAppBrowserService } from './../../services/in-app-browser/in-app-browser.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tc-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"]
})
export class EventsPage implements OnInit {
  private apiKey = "AIzaSyDxJFgb7IlKXSGritDAsMtmbWZ7P4rLfqU";

  public events;

  constructor(private browser: InAppBrowserService) {}

  ngOnInit() {
    this.getEvents();
  }

  async getEvents(refreshEvent?) {
    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/ok6j0uq2hpfl5u2883mn0poeh8%40group.calendar.google.com/events?key=" +
        this.apiKey
    ).then(res =>
      res.json().then(resJson => {
        this.events = resJson.items.map(item => {
          return {
            date: item.start.date,
            summary: item.summary,
            description: item.description || null,
            htmlLink: item.htmlLink
          };
        });
      })
    );

    if (refreshEvent) {
      refreshEvent.target.complete();
    }

    console.log(this.events);
  }

  openEvent(url) {
    this.browser.openUrl(url);
  }
}
