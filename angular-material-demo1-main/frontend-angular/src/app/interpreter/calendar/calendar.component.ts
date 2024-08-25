import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { colors } from '../../demo-utils/colors';
import { Interpreter } from '../../Model/Interpreter'; 
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .drag-active {
        position: relative;
        z-index: 1;
        pointer-events: none;
      }
      .drag-over {
        background-color: #eee;
      }
    `,
  ],
})
export class CalendarComponent implements OnInit {
  CalendarView = CalendarView;
  view = CalendarView.Month;
  viewDate = new Date();
  externalEvents: CalendarEvent[] = [];
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;
  refresh = new Subject<void>();
  newEventTitle: string = '';
  selectedInterpreter: string = '';
  filteredInterpreters: Interpreter[] = [];
  interpreters: Interpreter[] = [];

  constructor(private interpreterService: InterpreterService) {}

  ngOnInit() {
    this.interpreterService.GetInterpreter().subscribe((data) => {
      this.interpreters = data;
    });
  }

  filterInterpreters() {
    if (this.selectedInterpreter.trim()) {
      this.filteredInterpreters = this.interpreters.filter((interpreter) =>
        interpreter.name.toLowerCase().includes(this.selectedInterpreter.toLowerCase())
      );
    } else {
      this.filteredInterpreters = [];
    }
  }

  addCustomEvent() {
    const selectedInterpreterObject = this.interpreters.find(
      (interpreter) => interpreter.name === this.selectedInterpreter
    );

    if (this.newEventTitle.trim() && selectedInterpreterObject) {
      this.externalEvents.push({
        title: `${this.newEventTitle} (For ${this.selectedInterpreter})`,
        start: new Date(),
        color: colors.red, // Default color for new events
        draggable: true,
      });
      this.newEventTitle = '';
      this.selectedInterpreter = '';
      this.filteredInterpreters = [];
    }
  }

  eventDropped({
    event,
    newStart,
    newEnd,
    allDay,
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === CalendarView.Month) {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }

  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.externalEvents.push(event);
    }
  }
}
