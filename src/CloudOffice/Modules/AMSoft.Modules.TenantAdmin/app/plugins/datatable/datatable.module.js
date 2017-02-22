"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// DataTable
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
var datafilterpipe_1 = require("./datafilterpipe");
var forms_1 = require("@angular/forms");
var datatable_component_1 = require("./datatable.component");
//Routing
var datatable_routing_module_1 = require("./datatable-routing.module");
//
var DatatableInitModule = (function () {
    function DatatableInitModule() {
    }
    return DatatableInitModule;
}());
DatatableInitModule = __decorate([
    core_1.NgModule({
        imports: [
            datatable_routing_module_1.DatatableRoutingModule,
            common_1.CommonModule,
            angular2_datatable_1.DataTableModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            datatable_component_1.DataTableComponent,
            datafilterpipe_1.DataFilterPipe
        ]
    })
], DatatableInitModule);
exports.DatatableInitModule = DatatableInitModule;
//# sourceMappingURL=datatable.module.js.map