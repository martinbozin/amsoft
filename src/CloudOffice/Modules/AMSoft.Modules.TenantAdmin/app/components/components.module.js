"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var modules_1 = require("./modules/modules");
var settings_1 = require("./settings/settings");
var users_1 = require("./users/users");
var tenants_1 = require("./tenants/tenants");
// Modal Component
var modal_1 = require("ng2-bootstrap/modal");
// Tabs Component
var tabs_1 = require("ng2-bootstrap/tabs");
// Components Routing
var components_routing_module_1 = require("./components-routing.module");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            components_routing_module_1.ComponentsRoutingModule,
            modal_1.ModalModule.forRoot(),
            tabs_1.TabsModule
        ],
        declarations: [
            modules_1.ModulesComponent,
            settings_1.SettingsComponent,
            users_1.UsersComponent,
            tenants_1.TenantsComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map