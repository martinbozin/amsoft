"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var loading_buttons_component_1 = require("./loading-buttons.component");
var routes = [
    {
        path: '',
        component: loading_buttons_component_1.LoadingButtonsComponent,
        data: {
            title: 'Loading Buttons - Ladda'
        }
    }
];
var LoadingButtonsRoutingModule = (function () {
    function LoadingButtonsRoutingModule() {
    }
    return LoadingButtonsRoutingModule;
}());
LoadingButtonsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], LoadingButtonsRoutingModule);
exports.LoadingButtonsRoutingModule = LoadingButtonsRoutingModule;
//# sourceMappingURL=loading-buttons-routing.module.js.map