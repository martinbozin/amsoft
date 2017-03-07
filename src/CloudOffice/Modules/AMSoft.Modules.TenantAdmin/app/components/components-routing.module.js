"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_1 = require("./users/users");
var settings_1 = require("./settings/settings");
var modules_1 = require("./modules/modules");
var tenants_1 = require("./tenants/tenants");
var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'tenant',
                component: tenants_1.TenantsComponent,
                data: {
                    title: 'Tenant'
                }
            },
            {
                path: 'modules',
                component: modules_1.ModulesComponent,
                data: {
                    title: 'Modules'
                }
            },
            {
                path: 'users',
                component: users_1.UsersComponent,
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'settings',
                component: settings_1.SettingsComponent,
                data: {
                    title: 'Settings'
                }
            },
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    return ComponentsRoutingModule;
}());
ComponentsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ComponentsRoutingModule);
exports.ComponentsRoutingModule = ComponentsRoutingModule;
//# sourceMappingURL=components-routing.module.js.map