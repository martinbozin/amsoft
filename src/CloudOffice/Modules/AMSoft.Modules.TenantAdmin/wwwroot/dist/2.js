webpackJsonp([2],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var profile_service_1 = __webpack_require__(78);
var change_password_model_1 = __webpack_require__(101);
var validation_service_1 = __webpack_require__(6);
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(profileService, fb) {
        this.profileService = profileService;
        this.fb = fb;
        this.submitted = false;
        this.changePasswordModel = new change_password_model_1.ChangePasswordModel('', '', '');
        this.notification = new core_1.EventEmitter();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            newPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            confirmPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])]
        });
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.submitted = true;
        if (this.changePasswordForm.valid && this.changePasswordForm.dirty) {
            this.changePasswordModel.oldPassword = this.changePasswordForm.value.oldPassword;
            this.changePasswordModel.newPassword = this.changePasswordForm.value.newPassword;
            this.changePasswordModel.confirmPassword = this.changePasswordForm.value.confirmPassword;
            this.profileService.changePassword(this.changePasswordModel)
                .subscribe(function (res) {
                _this.notification.emit("Password changed successfully");
            }, function (errors) {
                _this.notification.emit(errors[0]);
                _this.changePasswordModel = new change_password_model_1.ChangePasswordModel('', '', '');
            });
        }
    };
    return ChangePasswordComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChangePasswordComponent.prototype, "notification", void 0);
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: 'appc-change-password',
        template: __webpack_require__(114)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService, forms_1.FormBuilder])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ChangePasswordModel = (function () {
    function ChangePasswordModel(oldPassword, newPassword, confirmPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
    return ChangePasswordModel;
}());
exports.ChangePasswordModel = ChangePasswordModel;


/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var profile_component_1 = __webpack_require__(89);
var routes = [
    { path: '', component: profile_component_1.ProfileComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 113:
/***/ function(module, exports) {

module.exports = "<div class=\"col-lg-4\">\n    <appc-page-heading text=\"Change User's name\"></appc-page-heading>\n\n    <div *ngFor=\"let error of errors\">\n        <label class=\"error\">{{error}}</label>\n    </div>\n    <form class=\"form-horizontal\" #hf=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" [class.error]=\"!firstName.valid\" class=\"form-control input-lg\" placeholder=\"First name\" [(ngModel)]=\"userNameModel.firstName\"\n                name=\"firstName\" ngControl=\"firstName\" required #firstName=\"ngModel\" />\n            <label *ngIf=\"!firstName.valid && firstName.touched\" class=\"error\">\n                        FirstName is required\n            </label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" [class.error]=\"!lastName.valid\" class=\"form-control input-lg\" placeholder=\"LastName\" [(ngModel)]=\"userNameModel.lastName\"\n                name=\"lastName\" ngControl=\"lastName\" required #lastName=\"ngModel\" />\n            <label *ngIf=\"!lastName.valid && lastName.touched\" class=\"error\">\n                            LastName is required\n                        </label>\n        </div>\n\n        <button class=\"btn btn-primary pull-right\" (click)=\"save()\" [disabled]=\"!hf.form.valid\">Update</button>\n    </form>\n</div>";

/***/ },

/***/ 114:
/***/ function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\n    <appc-page-heading text=\"Change password\"></appc-page-heading>\n\n    <div *ngFor=\"let error of errors\">\n        <label class=\"error\">{{error}}</label>\n    </div>\n\n    <form class=\"form-horizontal\" [formGroup]=\"changePasswordForm\" novalidate>\n        <div class=\"form-group\">\n            <label>Old password</label>\n            <input type=\"password\" [class.error]=\"!changePasswordForm.controls.oldPassword.valid\" class=\"form-control input-lg\" placeholder=\"Old password\"\n                formControlName=\"oldPassword\" />\n            <span [hidden]=\"changePasswordForm.controls.oldPassword.valid || (changePasswordForm.controls.oldPassword.pristine && !submitted)\"\n                class=\"text-danger\">\n                    Old password is required\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>New password</label>\n            <input type=\"password\" [class.error]=\"!changePasswordForm.controls.newPassword.valid\" class=\"form-control input-lg\" placeholder=\"New password\"\n                formControlName=\"newPassword\" />\n            <span [hidden]=\"changePasswordForm.controls.newPassword.valid || (changePasswordForm.controls.newPassword.pristine && !submitted)\"\n                class=\"text-danger\">\n                    New password is required\n            </span>\n        </div>\n        <div class=\"form-group\">\n            <label>Confirm password</label>\n            <input type=\"password\" [class.error]=\"!changePasswordForm.controls.confirmPassword.valid\" class=\"form-control input-lg\" placeholder=\"Confirm password\"\n                formControlName=\"confirmPassword\" />\n            <span [hidden]=\"changePasswordForm.controls.confirmPassword.valid || (changePasswordForm.controls.confirmPassword.pristine && !submitted)\"\n                class=\"text-danger\">\n                    Confirm password is required\n            </span>\n        </div>\n\n        <button (click)=\"changePassword()\" class=\"btn btn-primary pull-right\">Change password</button>\n\n    </form>\n</div>";

/***/ },

/***/ 115:
/***/ function(module, exports) {

module.exports = "<!--Alert message-->\n<div class=\"row\">\n    <div class=\"container col-md-4 alert alert-success animated fadeInRight\" *ngIf=\"notificationMessage\">\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"notificationMessage = ''\">&times;</button>\n        {{notificationMessage}}\n    </div>\n</div>\n\n<appc-change-name (notification)=\"notify($event)\"></appc-change-name>\n\n<appc-change-password (notification)=\"notify($event)\"></appc-change-password>\n\n";

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
// import { FormBuilder }  from '@angular/common';
// import { FormsModule } from '@angular/forms';
var shared_module_1 = __webpack_require__(19);
var profile_component_1 = __webpack_require__(89);
var profile_service_1 = __webpack_require__(78);
var profile_routes_1 = __webpack_require__(102);
var change_name_component_1 = __webpack_require__(98);
var change_password_component_1 = __webpack_require__(100);
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [profile_routes_1.routing, shared_module_1.SharedModule],
        declarations: [profile_component_1.ProfileComponent, change_name_component_1.ChangeNameComponent, change_password_component_1.ChangePasswordComponent],
        providers: [profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [])
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(5);
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


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.notify = function (message) {
        this.notificationMessage = message;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'appc-user-profile',
        template: __webpack_require__(115)
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__(78);
var change_name_model_1 = __webpack_require__(99);
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
        template: __webpack_require__(113)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ChangeNameComponent);
exports.ChangeNameComponent = ChangeNameComponent;


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ChangeNameModel = (function () {
    function ChangeNameModel(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return ChangeNameModel;
}());
exports.ChangeNameModel = ChangeNameModel;


/***/ }

});
//# sourceMappingURL=2.js.map