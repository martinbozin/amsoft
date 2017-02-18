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
var data_service_1 = require("../shared/services/data.service");
var ProfileService = (function () {
    function ProfileService(dataService) {
        this.dataService = dataService;
        this.userNameApi = 'api/profile/username/';
        this.changePasswordApi = 'api/profile/changepassword/';
    }
    ProfileService.prototype.changePassword = function (changePasswordModel) {
        return this.dataService.post(this.changePasswordApi, changePasswordModel);
    };
    ProfileService.prototype.userName = function (userNameModel) {
        if (userNameModel) {
            return this.dataService.post(this.userNameApi, userNameModel);
        }
        else {
            return this.dataService.get(this.userNameApi);
        }
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map