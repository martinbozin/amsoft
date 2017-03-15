"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
// Spinners
var draggable_cards_component_1 = require("./draggable-cards.component");
//Routing
var draggable_cards_routing_module_1 = require("./draggable-cards-routing.module");
//
var DraggableCardsModule = (function () {
    function DraggableCardsModule() {
    }
    return DraggableCardsModule;
}());
DraggableCardsModule = __decorate([
    core_1.NgModule({
        imports: [
            draggable_cards_routing_module_1.DraggableCardsRoutingModule,
            common_1.CommonModule,
            ng2_dragula_1.DragulaModule
        ],
        declarations: [
            draggable_cards_component_1.DraggableCardsComponent
        ]
    })
], DraggableCardsModule);
exports.DraggableCardsModule = DraggableCardsModule;
//# sourceMappingURL=draggable-cards.module.js.map