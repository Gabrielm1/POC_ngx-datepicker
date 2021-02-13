import { Component, ViewChild } from "@angular/core";
import * as m from "moment";
import { DaterangepickerDirective } from "ngx-daterangepicker-material";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(DaterangepickerDirective, { static: true })
  picker: DaterangepickerDirective;
  selected: { startDate: m.Moment; endDate: m.Moment };
  name = "Angular";
  alwaysShowCalendars: boolean;
  ranges: any = {
    "Last Month": [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0)
    ],
    "Last Year": [
      new Date(new Date().getFullYear() - 1, 0, 1),
      new Date(new Date().getFullYear() - 1, 11, 31)
    ]
  };
  constructor() {
    this.alwaysShowCalendars = true;
  }

  next() {
    //console.log(this.selected.endDate.toDate());
    /*console.log(this.selected);
    var diff = this.selected.endDate.diff(this.selected.startDate);
    console.log(this.selected.endDate.add(diff, "milliseconds"));
    console.log(diff);
    this.selected = {
      startDate: this.selected.endDate,
      endDate: this.selected.endDate.add(diff, "milliseconds")
    };
    console.log(this.selected);
    */
    var diff = this.selected.endDate.diff(this.selected.startDate);
    console.log(this.selected);
    this.selected = {
      startDate: this.selected.startDate.add(diff, "milliseconds"),
      endDate: this.selected.endDate.add(diff, "milliseconds")
    };
    // TODO handle month /years intervall
    console.log(this.selected);
  }

  prev() {
    var diff = this.selected.endDate.diff(this.selected.startDate);

    this.selected = {
      startDate: this.selected.startDate.subtract(diff, "milliseconds"),
      endDate: this.selected.endDate.subtract(diff, "milliseconds")
    };
  }

  open() {
    this.picker.open();
  }
}
