"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var examples_component_1 = require("./examples.component");
var examples_home_component_1 = require("./examples-home/examples-home.component");
var animation_component_1 = require("./animation/animation.component");
var typeahead_component_1 = require("./typeahead/typeahead.component");
var examples_routes_1 = require("./examples.routes");
var wikipedia_service_1 = require("./typeahead/wikipedia.service");
var ExamplesModule = (function () {
    function ExamplesModule() {
    }
    return ExamplesModule;
}());
ExamplesModule = __decorate([
    core_1.NgModule({
        imports: [examples_routes_1.routing, shared_module_1.SharedModule],
        declarations: [
            examples_component_1.ExamplesComponent,
            examples_home_component_1.ExamplesHomeComponent,
            // Examples
            animation_component_1.AnimationComponent,
            typeahead_component_1.TypeaheadComponent
        ],
        providers: [wikipedia_service_1.WikipediaService]
    })
], ExamplesModule);
exports.ExamplesModule = ExamplesModule;
//# sourceMappingURL=examples.module.js.map