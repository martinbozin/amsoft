"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Routing
var uikits_routing_module_1 = require("./uikits-routing.module");
var UIKitsModule = (function () {
    function UIKitsModule() {
    }
    return UIKitsModule;
}());
UIKitsModule = __decorate([
    core_1.NgModule({
        imports: [
            uikits_routing_module_1.UIKitsRoutingModule
        ],
        declarations: []
    })
], UIKitsModule);
exports.UIKitsModule = UIKitsModule;
//# sourceMappingURL=uikits.module.js.map