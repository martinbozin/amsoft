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
var login_model_1 = require("./login.model");
var login_service_1 = require("./login.service");
var auth_service_1 = require("../shared/services/auth.service");
var control_textbox_1 = require("../shared/forms/control-textbox");
var control_checkbox_1 = require("../shared/forms/control-checkbox");
var LoginComponent = (function () {
    function LoginComponent(loginService, router, authService) {
        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
        this.loginModel = new login_model_1.LoginModel('', '', false);
    }
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.loginModel.email = model.email;
        this.loginModel.password = model.password;
        // this.loginModel.rememberMe = model.rememberMe;
        this.loginService.login(this.loginModel)
            .subscribe(function (res) {
            _this.authService.setAuth(res);
            _this.router.navigate(['']);
        }, function (errors) {
            _this.errors = errors;
        });
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        var controls = [
            new control_textbox_1.ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 1
            }),
            new control_textbox_1.ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            }),
            new control_checkbox_1.ControlCheckbox({
                key: 'rememberMe',
                label: 'Remember me?',
                type: 'checkbox',
                value: false,
                order: 3
            })
        ];
        this.controls = controls;
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.redirect('Google');
    };
    LoginComponent.prototype.loginFacebook = function () {
        this.redirect('Facebook');
    };
    LoginComponent.prototype.loginMicrosoft = function () {
        this.redirect('Microsoft');
    };
    LoginComponent.prototype.loginTwitter = function () {
        this.redirect('Twitter');
    };
    LoginComponent.prototype.loginGithub = function () {
        this.redirect('GitHub');
    };
    LoginComponent.prototype.loginLinkedIn = function () {
        this.redirect('LinkedIn');
    };
    LoginComponent.prototype.redirect = function (provider) {
        window.location.href = window.location.protocol + '//' + window.location.host + '/' + '/api/account/ExternalLogin?provider=' + provider;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'appc-login',
        styleUrls: ['./login.component.scss'],
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map