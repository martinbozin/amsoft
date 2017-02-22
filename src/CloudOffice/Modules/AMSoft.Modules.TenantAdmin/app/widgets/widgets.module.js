"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var widgets_component_1 = require("./widgets.component");
var widgets_routing_module_1 = require("./widgets-routing.module");
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    core_1.NgModule({
        imports: [
            widgets_routing_module_1.WidgetsRoutingModule,
            ng2_charts_1.ChartsModule
        ],
        declarations: [widgets_component_1.WidgetsComponent]
    })
], WidgetsModule);
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map