"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var NotificationsComponent = (function () {
    function NotificationsComponent(toasterService) {
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    NotificationsComponent.prototype.showSuccess = function () {
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showError = function () {
        this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showWarning = function () {
        this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showInfo = function () {
        this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showPrimary = function () {
        this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    core_1.Component({
        templateUrl: 'notifications.component.html'
    }),
    __metadata("design:paramtypes", [angular2_toaster_1.ToasterService])
], NotificationsComponent);
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map