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
var router_1 = require("@angular/router");
var RegisterConfirmationComponent = (function () {
    function RegisterConfirmationComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    RegisterConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router
            .routerState.root
            .queryParams
            .subscribe(function (params) {
            _this.emailConfirmed = (params.emailConfirmed && params.emailConfirmed.toLowerCase() === 'true');
        });
    };
    RegisterConfirmationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return RegisterConfirmationComponent;
}());
RegisterConfirmationComponent = __decorate([
    core_1.Component({
        selector: 'appc-register-confirmation',
        templateUrl: './register-confirmation.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], RegisterConfirmationComponent);
exports.RegisterConfirmationComponent = RegisterConfirmationComponent;
//# sourceMappingURL=register-confirmation.component.js.map