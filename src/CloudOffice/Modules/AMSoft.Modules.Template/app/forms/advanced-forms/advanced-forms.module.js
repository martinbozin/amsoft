"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// Angular 2 Input Mask
var angular2_text_mask_1 = require("angular2-text-mask");
// Timepicker
var timepicker_1 = require("ng2-bootstrap/timepicker");
// Datepicker
var datepicker_1 = require("ng2-bootstrap/datepicker");
// Ng2-select
var ng2_select_1 = require("ng2-select");
//Routing
var advanced_forms_routing_module_1 = require("./advanced-forms-routing.module");
var advanced_forms_component_1 = require("./advanced-forms.component");
var AdvancedFormsModule = (function () {
    function AdvancedFormsModule() {
    }
    return AdvancedFormsModule;
}());
AdvancedFormsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            advanced_forms_routing_module_1.AdvancedFormsRoutingModule,
            angular2_text_mask_1.TextMaskModule,
            timepicker_1.TimepickerModule.forRoot(),
            datepicker_1.DatepickerModule.forRoot(),
            ng2_select_1.SelectModule
        ],
        declarations: [
            advanced_forms_component_1.AdvancedFormsComponent
        ]
    })
], AdvancedFormsModule);
exports.AdvancedFormsModule = AdvancedFormsModule;
//# sourceMappingURL=advanced-forms.module.js.map