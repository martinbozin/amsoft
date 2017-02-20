webpackJsonp([1],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var control_base_1 = __webpack_require__(21);
var ControlCheckbox = (function (_super) {
    __extends(ControlCheckbox, _super);
    function ControlCheckbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = 'checkbox';
        _this.value = options.value || false;
        return _this;
    }
    return ControlCheckbox;
}(control_base_1.ControlBase));
exports.ControlCheckbox = ControlCheckbox;


/***/ },

/***/ 113:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Login\n        </div>\n\n        <div class=\"card-block\">\n            <appc-error-summary [errors]=\"errors\"></appc-error-summary>\n            <appc-dynamic-form (formsubmit)=\"login($event)\" [controls]=\"controls\" [btnText]=\"'Login'\"></appc-dynamic-form>\n        </div>\n\n    </div>\n\n    <p class=\"text-xs-center font-weight-bold\">\n        OR\n    </p>\n\n    <div class=\"col-md-6 offset-md-3\">\n        <appc-social-login></appc-social-login>\n    </div>\n\n</div>";

/***/ },

/***/ 114:
/***/ function(module, exports) {

module.exports = "<button class=\"btn social-login-button google\" (click)=\"loginGoogle()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n                    <span>Log in with Google</span>\n        </span>\n    </div>\n</button>\n\n<button class=\"btn social-login-button facebook\" (click)=\"loginFacebook()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    <span>Log in with Facebook</span>\n        </span>\n    </div>\n</button>\n\n<button class=\"btn social-login-button microsoft\" (click)=\"loginMicrosoft()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-windows\" aria-hidden=\"true\"></i>\n                    <span>Log in with Microsoft</span>\n        </span>\n    </div>\n</button>\n\n<button class=\"btn social-login-button twitter\" (click)=\"loginTwitter()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    <span>Log in with Twitter</span>\n        </span>\n    </div>\n</button>\n\n<button class=\"btn social-login-button github\" (click)=\"loginGithub()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n                    <span>Log in with Github</span>\n        </span>\n    </div>\n</button>\n\n<button class=\"btn social-login-button linkedin\" (click)=\"loginLinkedIn()\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <span>\n                    <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n                    <span>Log in with LinkedIn</span>\n        </span>\n    </div>\n</button>";

/***/ },

/***/ 124:
/***/ function(module, exports) {

module.exports = ".separator {\n  font-size: 15px;\n  font-weight: 600;\n  margin: 24px auto 16px auto;\n  position: relative;\n  overflow: hidden;\n  width: 100px;\n  color: rgba(0, 0, 0, 0.54); }\n  .separator .text {\n    display: inline-block;\n    vertical-align: baseline;\n    position: relative;\n    padding: 0 8px;\n    z-index: 9999; }\n    .separator .text:before, .separator .text:after {\n      content: '';\n      display: block;\n      width: 30px;\n      position: absolute;\n      top: 10px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12); }\n    .separator .text:before {\n      right: 100%; }\n    .separator .text:after {\n      left: 100%; }\n"

/***/ },

/***/ 125:
/***/ function(module, exports) {

module.exports = ".social-login-button {\n  margin: 5px; }\n  .social-login-button.google, .social-login-button.facebook, .social-login-button.microsoft, .social-login-button.twitter, .social-login-button.github, .social-login-button.linkedin {\n    width: 192px;\n    text-transform: none;\n    color: #FFFFFF;\n    font-size: 13px; }\n    .social-login-button.google md-icon, .social-login-button.facebook md-icon, .social-login-button.microsoft md-icon, .social-login-button.twitter md-icon, .social-login-button.github md-icon, .social-login-button.linkedin md-icon {\n      color: #FFFFFF;\n      margin: 0 8px 0 0; }\n  .social-login-button.google {\n    background-color: #D73D32; }\n  .social-login-button.facebook {\n    background-color: #3f5c9a; }\n  .social-login-button.microsoft {\n    background-color: #2672EC; }\n  .social-login-button.twitter {\n    background-color: #55ACEE; }\n  .social-login-button.github {\n    background-color: #444444; }\n  .social-login-button.linkedin {\n    background-color: #007BB6; }\n"

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(20);
var social_login_component_1 = __webpack_require__(98);
var login_component_1 = __webpack_require__(87);
var login_service_1 = __webpack_require__(88);
var login_routes_1 = __webpack_require__(97);
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [login_routes_1.routing, shared_module_1.SharedModule],
        declarations: [login_component_1.LoginComponent, social_login_component_1.SocialLoginComponent],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
exports.LoginModule = LoginModule;


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var control_base_1 = __webpack_require__(21);
var ControlTextbox = (function (_super) {
    __extends(ControlTextbox, _super);
    function ControlTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textbox';
        return _this;
    }
    return ControlTextbox;
}(control_base_1.ControlBase));
exports.ControlTextbox = ControlTextbox;


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var login_model_1 = __webpack_require__(96);
var login_service_1 = __webpack_require__(88);
var auth_service_1 = __webpack_require__(7);
var control_textbox_1 = __webpack_require__(79);
var control_checkbox_1 = __webpack_require__(106);
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
        styles: [__webpack_require__(124)],
        template: __webpack_require__(113)
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;


/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(5);
var LoginService = (function () {
    function LoginService(accountService) {
        this.accountService = accountService;
        this.accountLoginApi = 'api/account/login/';
    }
    LoginService.prototype.login = function (creds) {
        return this.accountService.post(this.accountLoginApi, creds);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], LoginService);
exports.LoginService = LoginService;


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LoginModel = (function () {
    function LoginModel(email, password, rememberMe) {
        this.email = email;
        this.password = password;
        this.rememberMe = rememberMe;
    }
    return LoginModel;
}());
exports.LoginModel = LoginModel;


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var login_component_1 = __webpack_require__(87);
var routes = [
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(22);
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
        styles: [__webpack_require__(125)],
        template: __webpack_require__(114)
    }),
    __metadata("design:paramtypes", [common_1.Location])
], SocialLoginComponent);
exports.SocialLoginComponent = SocialLoginComponent;


/***/ }

});
//# sourceMappingURL=1.js.map