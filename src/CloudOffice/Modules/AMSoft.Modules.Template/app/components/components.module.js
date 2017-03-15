"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var buttons_component_1 = require("./buttons.component");
var cards_component_1 = require("./cards.component");
var forms_component_1 = require("./forms.component");
var social_buttons_component_1 = require("./social-buttons.component");
var switches_component_1 = require("./switches.component");
var tables_component_1 = require("./tables.component");
// Modal Component
var modal_1 = require("ng2-bootstrap/modal");
var modals_component_1 = require("./modals.component");
// Tabs Component
var tabs_1 = require("ng2-bootstrap/tabs");
var tabs_component_1 = require("./tabs.component");
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
            buttons_component_1.ButtonsComponent,
            cards_component_1.CardsComponent,
            forms_component_1.FormsComponent,
            modals_component_1.ModalsComponent,
            social_buttons_component_1.SocialButtonsComponent,
            switches_component_1.SwitchesComponent,
            tables_component_1.TablesComponent,
            tabs_component_1.TabsComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map