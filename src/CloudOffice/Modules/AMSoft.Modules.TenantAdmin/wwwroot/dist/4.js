webpackJsonp([4],{

/***/ 107:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1>Admin section</h1>\r\n    <div class=\"container-fluid\">\r\n        <ngbd-tabset-selectbyid></ngbd-tabset-selectbyid>\r\n    </div>\n</div>\n";

/***/ },

/***/ 108:
/***/ function(module, exports) {

module.exports = "<ngb-tabset #t=\"ngbTabset\">\r\n    <ngb-tab title=\"Tenants\" id=\"Tenants\">\r\n        <template ngbTabContent>\r\n            Tenants\r\n        </template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"Modules\" title=\"Modules\">\r\n        <template ngbTabContent>\r\n            Modules\r\n        </template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"Users\" title=\"Users\">\r\n        <template ngbTabContent>\r\n            Users\r\n        </template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"Settings\" title=\"Settings\">\r\n        <template ngbTabContent>\r\n            Settings\r\n        </template>\r\n    </ngb-tab>\r\n</ngb-tabset>\r\n<!--<p>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"t.select('bar')\">Selected tab with \"bar\" id</button>\r\n</p>-->\r\n";

/***/ },

/***/ 73:
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
var admin_component_1 = __webpack_require__(80);
var admin_service_1 = __webpack_require__(81);
var admin_routes_1 = __webpack_require__(93);
var ng_bootstrap_1 = __webpack_require__(8);
var tabset_selectbyid_1 = __webpack_require__(94);
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [admin_routes_1.routing, shared_module_1.SharedModule, ng_bootstrap_1.NgbModule],
        declarations: [admin_component_1.AdminComponent, tabset_selectbyid_1.NgbdTabsetSelectbyid],
        providers: [admin_service_1.AdminService]
    }),
    __metadata("design:paramtypes", [])
], AdminModule);
exports.AdminModule = AdminModule;


/***/ },

/***/ 80:
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
var admin_service_1 = __webpack_require__(81);
var AdminComponent = (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
    }
    AdminComponent.prototype.doAdminOperation = function () {
        var _this = this;
        this.adminService.do()
            .subscribe(function (data) { return _this.message = data; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'appc--admin',
        template: __webpack_require__(107)
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


/***/ },

/***/ 81:
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
var AdminService = (function () {
    function AdminService(dataService) {
        this.dataService = dataService;
        this.adminApiUrl = 'api/admin/doadminoperation/';
    }
    AdminService.prototype.do = function () {
        return this.dataService.get(this.adminApiUrl);
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AdminService);
exports.AdminService = AdminService;


/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var admin_component_1 = __webpack_require__(80);
var routes = [
    { path: '', component: admin_component_1.AdminComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ },

/***/ 94:
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
var NgbdTabsetSelectbyid = (function () {
    function NgbdTabsetSelectbyid() {
    }
    return NgbdTabsetSelectbyid;
}());
NgbdTabsetSelectbyid = __decorate([
    core_1.Component({
        selector: 'ngbd-tabset-selectbyid',
        template: __webpack_require__(108)
    }),
    __metadata("design:paramtypes", [])
], NgbdTabsetSelectbyid);
exports.NgbdTabsetSelectbyid = NgbdTabsetSelectbyid;


/***/ }

});
//# sourceMappingURL=4.js.map