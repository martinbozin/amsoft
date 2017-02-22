"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var date_fns_1 = require("date-fns");
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = (function () {
    function CalendarComponent() {
        var _this = this;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    console.log('Edit event', event);
                }
            }, {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                }
            }];
        this.events = [{
                start: date_fns_1.subDays(date_fns_1.startOfDay(new Date()), 1),
                end: date_fns_1.addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: date_fns_1.startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: date_fns_1.subDays(date_fns_1.endOfMonth(new Date()), 3),
                end: date_fns_1.addDays(date_fns_1.endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.increment = function () {
        var addFn = {
            day: date_fns_1.addDays,
            week: date_fns_1.addWeeks,
            month: date_fns_1.addMonths
        }[this.view];
        this.viewDate = addFn(this.viewDate, 1);
    };
    CalendarComponent.prototype.decrement = function () {
        var subFn = {
            day: date_fns_1.subDays,
            week: date_fns_1.subWeeks,
            month: date_fns_1.subMonths
        }[this.view];
        this.viewDate = subFn(this.viewDate, 1);
    };
    CalendarComponent.prototype.today = function () {
        this.viewDate = new Date();
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        templateUrl: 'calendar.component.html'
    })
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map