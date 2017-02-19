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
var forms_1 = require("@angular/forms");
var profile_service_1 = require("../profile.service");
var change_password_model_1 = require("./change-password.model");
var validation_service_1 = require("../../shared/forms/validation.service");
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
        templateUrl: './change-password.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService, forms_1.FormBuilder])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map