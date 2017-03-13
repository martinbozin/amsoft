"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var modules_1 = require("./modules/modules");
var settings_1 = require("./settings/settings");
var users_1 = require("./users/users");
var tenants_1 = require("./tenants/tenants");
var forms_1 = require("@angular/forms");
// Modal Component
var modal_1 = require("ng2-bootstrap/modal");
// Tabs Component
var tabs_1 = require("ng2-bootstrap/tabs");
// Components Routing
var components_routing_module_1 = require("./components-routing.module");
var tenant_service_1 = require("./tenants/tenant.service");
var data_service_1 = require("../shared/services/data.service");
var api_gateway_service_1 = require("../shared/services/api-gateway.service");
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
            tabs_1.TabsModule,
            forms_1.FormsModule
        ],
        declarations: [
            modules_1.ModulesComponent,
            settings_1.SettingsComponent,
            users_1.UsersComponent,
            tenants_1.TenantsComponent,
        ],
        providers: [tenant_service_1.TenantService, data_service_1.DataService, api_gateway_service_1.ApiGatewayService, http_1.Http]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map