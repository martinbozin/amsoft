"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _404_component_1 = require("./404.component");
var _500_component_1 = require("./500.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var pages_routing_module_1 = require("./pages-routing.module");
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [pages_routing_module_1.PagesRoutingModule],
        declarations: [
            _404_component_1.p404Component,
            _500_component_1.p500Component,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ]
    })
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map