webpackJsonp([3],{

/***/ 101:
/***/ function(module, exports) {

module.exports = "<div>\n    <appc-page-heading text=\"Registration confirmed\">\n    </appc-page-heading>\n\n    <p *ngIf=\"!emailConfirmed\">\n        We have sent you a confirmation email, please visit your inbox and confirm by clicking the confirmation link.\n    </p>\n\n    <p *ngIf=\"emailConfirmed\">\n        Thank you for confirming your email, please <a routerLink=\"../../login\">Login</a> now.\n    </p>\n</div>#";

/***/ },

/***/ 102:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Register\n        </div>\n        \n        <div class=\"card-block\">\n            <appc-error-summary [errors]=\"errors\"></appc-error-summary>\n            <appc-dynamic-form (formsubmit)=\"register($event)\" [controls]=\"controls\" [btnText]=\"'Register'\"></appc-dynamic-form>\n\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 62:
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
var register_component_1 = __webpack_require__(76);
var register_confirmation_component_1 = __webpack_require__(75);
var register_service_1 = __webpack_require__(77);
var register_routes_1 = __webpack_require__(89);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [register_routes_1.routing, shared_module_1.SharedModule],
        declarations: [register_component_1.RegisterComponent, register_confirmation_component_1.RegisterConfirmationComponent],
        providers: [register_service_1.RegisterService]
    }),
    __metadata("design:paramtypes", [])
], RegisterModule);
exports.RegisterModule = RegisterModule;


/***/ },

/***/ 64:
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
var router_1 = __webpack_require__(2);
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
        template: __webpack_require__(101)
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], RegisterConfirmationComponent);
exports.RegisterConfirmationComponent = RegisterConfirmationComponent;


/***/ },

/***/ 76:
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
var register_model_1 = __webpack_require__(88);
var register_service_1 = __webpack_require__(77);
var control_textbox_1 = __webpack_require__(64);
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
        template: __webpack_require__(102)
    }),
    __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router, router_1.ActivatedRoute])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ },

/***/ 77:
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
var RegisterService = (function () {
    function RegisterService(accountService) {
        this.accountService = accountService;
        this.accountRegisterApi = 'api/account/register/';
    }
    RegisterService.prototype.register = function (newUser) {
        return this.accountService.post(this.accountRegisterApi, newUser);
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], RegisterService);
exports.RegisterService = RegisterService;


/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var RegisterModel = (function () {
    function RegisterModel(username, password, email, firstname, lastname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var register_component_1 = __webpack_require__(76);
var register_confirmation_component_1 = __webpack_require__(75);
var routes = [
    { path: '', redirectTo: 'registerhome', pathMatch: 'full' },
    { path: 'registerhome', component: register_component_1.RegisterComponent },
    { path: 'registerconfirmation', component: register_confirmation_component_1.RegisterConfirmationComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }

});
//# sourceMappingURL=3.js.map