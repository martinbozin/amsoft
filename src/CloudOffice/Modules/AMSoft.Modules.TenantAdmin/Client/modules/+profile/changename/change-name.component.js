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
var profile_service_1 = require("../profile.service");
var change_name_model_1 = require("./change-name.model");
var ChangeNameComponent = (function () {
    function ChangeNameComponent(profileService) {
        this.profileService = profileService;
        this.userNameModel = new change_name_model_1.ChangeNameModel('', '');
        this.notification = new core_1.EventEmitter();
    }
    ChangeNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.userName()
            .subscribe(function (res) {
            _this.userNameModel.firstName = res.firstName;
            _this.userNameModel.lastName = res.lastName;
        }, function (errors) { return _this.notification.emit(errors[0]); });
    };
    ChangeNameComponent.prototype.save = function () {
        var _this = this;
        this.profileService.userName(this.userNameModel)
            .subscribe(function (res) {
            _this.userNameModel.firstName = res.firstName;
            _this.userNameModel.lastName = res.lastName;
            _this.notification.emit("Profile name changed to " + res.firstName + " " + res.lastName);
        }, function (errors) { return _this.notification.emit(errors[0]); });
    };
    return ChangeNameComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChangeNameComponent.prototype, "notification", void 0);
ChangeNameComponent = __decorate([
    core_1.Component({
        selector: 'appc-change-name',
        templateUrl: './change-name.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ChangeNameComponent);
exports.ChangeNameComponent = ChangeNameComponent;
//# sourceMappingURL=change-name.component.js.map