"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var register_component_1 = require("./+register/register.component");
var register_confirmation_component_1 = require("./+confirmation/register-confirmation.component");
var register_service_1 = require("./register.service");
var register_routes_1 = require("./register.routes");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [register_routes_1.routing, shared_module_1.SharedModule],
        declarations: [register_component_1.RegisterComponent, register_confirmation_component_1.RegisterConfirmationComponent],
        providers: [register_service_1.RegisterService]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map