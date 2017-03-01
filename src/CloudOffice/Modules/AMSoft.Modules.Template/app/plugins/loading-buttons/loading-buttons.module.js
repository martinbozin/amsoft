"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Loading Buttons
var angular2_ladda_1 = require("angular2-ladda");
var loading_buttons_component_1 = require("./loading-buttons.component");
// Routing
var loading_buttons_routing_module_1 = require("./loading-buttons-routing.module");
var LoadingButtonsModule = (function () {
    function LoadingButtonsModule() {
    }
    return LoadingButtonsModule;
}());
LoadingButtonsModule = __decorate([
    core_1.NgModule({
        imports: [
            loading_buttons_routing_module_1.LoadingButtonsRoutingModule,
            common_1.CommonModule,
            angular2_ladda_1.LaddaModule
        ],
        declarations: [
            loading_buttons_component_1.LoadingButtonsComponent
        ]
    })
], LoadingButtonsModule);
exports.LoadingButtonsModule = LoadingButtonsModule;
//# sourceMappingURL=loading-buttons.module.js.map