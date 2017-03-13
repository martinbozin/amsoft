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
var tenant_model_1 = require("./tenant.model");
var tenant_service_1 = require("./tenant.service");
var TenantsComponent = (function () {
    function TenantsComponent(tenantService) {
        this.tenantService = tenantService;
        this.tenantModel = new tenant_model_1.TenantModel('', '', '');
        this.notification = new core_1.EventEmitter();
    }
    TenantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.tenantService.getTenant(this.tenantModel.name)
            .subscribe(function (res) {
            debugger;
            _this.tenantModel.name = res.firstName;
            _this.tenantModel.address = res.lastName;
            _this.tenantModel.phone = res.phone;
        }, function (errors) { return _this.notification.emit(errors[0]); });
    };
    return TenantsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TenantsComponent.prototype, "notification", void 0);
TenantsComponent = __decorate([
    core_1.Component({
        templateUrl: 'tenants.html'
    }),
    __metadata("design:paramtypes", [tenant_service_1.TenantService])
], TenantsComponent);
exports.TenantsComponent = TenantsComponent;
//# sourceMappingURL=tenants.js.map