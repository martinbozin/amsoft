webpackJsonp([6],{

/***/ 454:
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
            title: 'UIKits'
        },
        children: [
            {
                path: 'email',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(15).then((function (require) { resolve(__webpack_require__(451)['EmailModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'invoicing',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(16).then((function (require) { resolve(__webpack_require__(453)['InvoiceModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            }
        ]
    }
];
var UIKitsRoutingModule = (function () {
    function UIKitsRoutingModule() {
    }
    return UIKitsRoutingModule;
}());
UIKitsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], UIKitsRoutingModule);
exports.UIKitsRoutingModule = UIKitsRoutingModule;


/***/ },

/***/ 69:
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
var uikits_routing_module_1 = __webpack_require__(454);
var UIKitsModule = (function () {
    function UIKitsModule() {
    }
    return UIKitsModule;
}());
UIKitsModule = __decorate([
    core_1.NgModule({
        imports: [
            uikits_routing_module_1.UIKitsRoutingModule
        ],
        declarations: []
    })
], UIKitsModule);
exports.UIKitsModule = UIKitsModule;


/***/ }

});
//# sourceMappingURL=6.js.map