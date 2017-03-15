webpackJsonp([8],{

/***/ 433:
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
var routes = [
    {
        path: '',
        data: {
            title: 'Forms'
        },
        children: [
            {
                path: 'basic-forms',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(18).then((function (require) { resolve(__webpack_require__(432)['BasicFormsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'advanced-forms',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(10).then((function (require) { resolve(__webpack_require__(430)['AdvancedFormsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            }
        ]
    }
];
var FormsRoutingModule = (function () {
    function FormsRoutingModule() {
    }
    return FormsRoutingModule;
}());
FormsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], FormsRoutingModule);
exports.FormsRoutingModule = FormsRoutingModule;


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
//Routing
var forms_routing_module_1 = __webpack_require__(433);
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_routing_module_1.FormsRoutingModule
        ],
        declarations: []
    })
], FormsModule);
exports.FormsModule = FormsModule;


/***/ }

});
//# sourceMappingURL=8.js.map