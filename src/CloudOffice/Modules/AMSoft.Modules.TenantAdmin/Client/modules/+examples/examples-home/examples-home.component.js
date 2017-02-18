"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ExamplesHomeComponent = (function () {
    function ExamplesHomeComponent() {
    }
    ExamplesHomeComponent.prototype.ngOnInit = function () {
        this.examples = [
            { route: 'animation', title: 'Animation', description: 'An example using angular 2 webanimations api' },
            { route: 'typeahead', title: 'Typeahead', description: 'An example showing ngbootstrap\'s typeahed control' }
        ];
    };
    return ExamplesHomeComponent;
}());
ExamplesHomeComponent = __decorate([
    core_1.Component({
        selector: 'appc-examples-home',
        templateUrl: './examples-home.component.html',
        styleUrls: ['./examples-home.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ExamplesHomeComponent);
exports.ExamplesHomeComponent = ExamplesHomeComponent;
//# sourceMappingURL=examples-home.component.js.map