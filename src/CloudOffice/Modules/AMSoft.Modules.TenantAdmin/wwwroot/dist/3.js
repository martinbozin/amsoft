webpackJsonp([3],{

/***/ 260:
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
var p404Component = (function () {
    function p404Component() {
    }
    return p404Component;
}());
p404Component = __decorate([
    core_1.Component({
        template: __webpack_require__(563)
    }),
    __metadata("design:paramtypes", [])
], p404Component);
exports.p404Component = p404Component;


/***/ },

/***/ 261:
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
var p500Component = (function () {
    function p500Component() {
    }
    return p500Component;
}());
p500Component = __decorate([
    core_1.Component({
        template: __webpack_require__(564)
    }),
    __metadata("design:paramtypes", [])
], p500Component);
exports.p500Component = p500Component;


/***/ },

/***/ 262:
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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(565)
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;


/***/ },

/***/ 263:
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
var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(566)
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(12);
var _404_component_1 = __webpack_require__(260);
var _500_component_1 = __webpack_require__(261);
var login_component_1 = __webpack_require__(262);
var register_component_1 = __webpack_require__(263);
var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: _404_component_1.p404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: _500_component_1.p500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;


/***/ },

/***/ 563:
/***/ function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"clearfix\">\r\n                    <h1 class=\"float-left display-3 mr-2\">404</h1>\r\n                    <h4 class=\"pt-1\">Oops! You're lost.</h4>\r\n                    <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n                </div>\r\n                <div class=\"input-prepend input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i>\r\n                    </span>\r\n                    <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 564:
/***/ function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"clearfix\">\r\n                    <h1 class=\"float-left display-3 mr-2\">500</h1>\r\n                    <h4 class=\"pt-1\">Houston, we have a problem!</h4>\r\n                    <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n                </div>\r\n                <div class=\"input-prepend input-group\">\r\n                    <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i>\r\n                    </span>\r\n                    <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 565:
/***/ function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card-group mb-0\">\r\n                    <div class=\"card p-2\">\r\n                        <div class=\"card-block\">\r\n                            <h1>Login</h1>\r\n                            <p class=\"text-muted\">Sign In to your account</p>\r\n                            <div class=\"input-group mb-1\">\r\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                            </div>\r\n                            <div class=\"input-group mb-2\">\r\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\r\n                                </span>\r\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <button type=\"button\" class=\"btn btn-primary px-2\">Login</button>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                    <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse card-primary py-3 hidden-md-down\" style=\"width:44%\">\r\n                        <div class=\"card-block text-center\">\r\n                            <div>\r\n                                <h2>Sign up</h2>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                                <button type=\"button\" class=\"btn btn-primary active mt-1\">Register Now!</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 566:
/***/ function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card mx-2\">\r\n                    <div class=\"card-block p-2\">\r\n                        <h1>Register</h1>\r\n                        <p class=\"text-muted\">Create your account</p>\r\n                        <div class=\"input-group mb-1\">\r\n                            <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\r\n                            </span>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                        </div>\r\n\r\n                        <div class=\"input-group mb-1\">\r\n                            <span class=\"input-group-addon\">@</span>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                        </div>\r\n\r\n                        <div class=\"input-group mb-1\">\r\n                            <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\r\n                            </span>\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                        </div>\r\n\r\n                        <div class=\"input-group mb-2\">\r\n                            <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\r\n                            </span>\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\r\n                        </div>\r\n\r\n                        <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n                    </div>\r\n                    <div class=\"card-footer p-2\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <button class=\"btn btn-block btn-facebook\" type=\"button\">\r\n                                    <span>facebook</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <button class=\"btn btn-block btn-twitter\" type=\"button\">\r\n                                    <span>twitter</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var _404_component_1 = __webpack_require__(260);
var _500_component_1 = __webpack_require__(261);
var login_component_1 = __webpack_require__(262);
var register_component_1 = __webpack_require__(263);
var pages_routing_module_1 = __webpack_require__(430);
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [pages_routing_module_1.PagesRoutingModule],
        declarations: [
            _404_component_1.p404Component,
            _500_component_1.p500Component,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ]
    })
], PagesModule);
exports.PagesModule = PagesModule;


/***/ }

});
//# sourceMappingURL=3.js.map