"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var datatable_component_1 = require("./datatable.component");
var routes = [
    {
        path: '',
        component: datatable_component_1.DataTableComponent,
        data: {
            title: 'DataTable'
        }
    }
];
var DatatableRoutingModule = (function () {
    function DatatableRoutingModule() {
    }
    return DatatableRoutingModule;
}());
DatatableRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DatatableRoutingModule);
exports.DatatableRoutingModule = DatatableRoutingModule;
//# sourceMappingURL=datatable-routing.module.js.map