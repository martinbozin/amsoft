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
var common_1 = require("@angular/common");
var SocialLoginComponent = (function () {
    function SocialLoginComponent(location) {
        this.location = location;
    }
    SocialLoginComponent.prototype.ngOnInit = function () { };
    SocialLoginComponent.prototype.loginGoogle = function () {
        this.redirect('Google');
    };
    SocialLoginComponent.prototype.loginFacebook = function () {
        this.redirect('Facebook');
    };
    SocialLoginComponent.prototype.loginMicrosoft = function () {
        this.redirect('Microsoft');
    };
    SocialLoginComponent.prototype.loginTwitter = function () {
        this.redirect('Twitter');
    };
    SocialLoginComponent.prototype.loginGithub = function () {
        this.redirect('GitHub');
    };
    SocialLoginComponent.prototype.loginLinkedIn = function () {
        this.redirect('LinkedIn');
    };
    SocialLoginComponent.prototype.redirect = function (provider) {
        var url = window.location.protocol + '//' + window.location.host + '/api/account/ExternalLogin?provider=' + provider;
        console.log(url);
        window.location.href = url;
    };
    return SocialLoginComponent;
}());
SocialLoginComponent = __decorate([
    core_1.Component({
        selector: 'appc-social-login',
        styleUrls: ['./social-login.component.scss'],
        templateUrl: './social-login.component.html'
    }),
    __metadata("design:paramtypes", [common_1.Location])
], SocialLoginComponent);
exports.SocialLoginComponent = SocialLoginComponent;
//# sourceMappingURL=social-login.component.js.map