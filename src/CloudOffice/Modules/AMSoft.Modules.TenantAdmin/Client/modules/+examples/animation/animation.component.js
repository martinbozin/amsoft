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
var AnimationComponent = (function () {
    function AnimationComponent() {
        this.buttonState = 'inactive';
    }
    AnimationComponent.prototype.ngOnInit = function () { };
    AnimationComponent.prototype.toggleAnimation = function () {
        this.buttonState = this.buttonState === 'active' ? 'inactive' : 'active';
    };
    return AnimationComponent;
}());
AnimationComponent = __decorate([
    core_1.Component({
        selector: 'appc-animation',
        templateUrl: './animation.component.html',
        styleUrls: ['./animation.component.scss'],
        animations: [
            core_1.trigger('buttonState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.5)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map