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
var register_model_1 = require("../register.model");
var register_service_1 = require("../register.service");
var control_textbox_1 = require("../../shared/forms/control-textbox");
var RegisterComponent = (function () {
    function RegisterComponent(registerService, router, route) {
        this.registerService = registerService;
        this.router = router;
        this.route = route;
        this.registerModel = new register_model_1.RegisterModel('', '', '', '', '');
    }
    RegisterComponent.prototype.register = function (model) {
        var _this = this;
        this.registerModel.username = model.username;
        this.registerModel.email = model.email;
        this.registerModel.firstname = model.firstname;
        this.registerModel.lastname = model.lastname;
        this.registerModel.password = model.password;
        this.registerService.register(this.registerModel)
            .subscribe(function (res) {
            _this.router.navigate(['../registerconfirmation'], { relativeTo: _this.route, queryParams: { emailConfirmed: true } });
        }, function (errors) {
            _this.errors = errors;
        });
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        var controls = [
            new control_textbox_1.ControlTextbox({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'textbox',
                required: true,
                order: 1
            }),
            new control_textbox_1.ControlTextbox({
                key: 'firstname',
                label: 'Firstname',
                placeholder: 'Firstname',
                value: '',
                type: 'textbox',
                required: true,
                order: 2
            }),
            new control_textbox_1.ControlTextbox({
                key: 'lastname',
                label: 'Lastname',
                placeholder: 'Lastname',
                value: '',
                type: 'textbox',
                required: true,
                order: 3
            }),
            new control_textbox_1.ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 4
            }),
            new control_textbox_1.ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 5
            })
        ];
        this.controls = controls;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'appc-register',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router, router_1.ActivatedRoute])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map