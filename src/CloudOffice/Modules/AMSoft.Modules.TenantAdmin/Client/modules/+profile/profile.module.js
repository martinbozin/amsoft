"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { FormBuilder }  from '@angular/common';
// import { FormsModule } from '@angular/forms';
var shared_module_1 = require("../shared/shared.module");
var profile_component_1 = require("./profile.component");
var profile_service_1 = require("./profile.service");
var profile_routes_1 = require("./profile.routes");
var change_name_component_1 = require("./changename/change-name.component");
var change_password_component_1 = require("./changepassword/change-password.component");
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
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map