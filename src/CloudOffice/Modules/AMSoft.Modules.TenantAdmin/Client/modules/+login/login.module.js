"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var social_login_component_1 = require("./sociallogin/social-login.component");
var login_component_1 = require("./login.component");
var login_service_1 = require("./login.service");
var login_routes_1 = require("./login.routes");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [login_routes_1.routing, shared_module_1.SharedModule],
        declarations: [login_component_1.LoginComponent, social_login_component_1.SocialLoginComponent],
        providers: [login_service_1.LoginService]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map