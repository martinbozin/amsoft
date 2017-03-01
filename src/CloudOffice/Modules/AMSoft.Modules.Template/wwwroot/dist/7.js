webpackJsonp([7],{

/***/ 446:
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
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(9).then((function (require) { resolve(__webpack_require__(436)['CalendarInitModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'datatable',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(12).then((function (require) { resolve(__webpack_require__(439)['DatatableInitModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'draggable-cards',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(11).then((function (require) { resolve(__webpack_require__(441)['DraggableCardsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'loading-buttons',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(14).then((function (require) { resolve(__webpack_require__(443)['LoadingButtonsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'notifications',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(13).then((function (require) { resolve(__webpack_require__(445)['NotificationsModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            },
            {
                path: 'spinners',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* nsure */(17).then((function (require) { resolve(__webpack_require__(448)['SpinnersModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); }
            }
        ]
    }
];
var PluginsRoutingModule = (function () {
    function PluginsRoutingModule() {
    }
    return PluginsRoutingModule;
}());
PluginsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], PluginsRoutingModule);
exports.PluginsRoutingModule = PluginsRoutingModule;


/***/ },

/***/ 68:
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
var plugins_routing_module_1 = __webpack_require__(446);
var PluginsModule = (function () {
    function PluginsModule() {
    }
    return PluginsModule;
}());
PluginsModule = __decorate([
    core_1.NgModule({
        imports: [
            plugins_routing_module_1.PluginsRoutingModule
        ],
        declarations: []
    })
], PluginsModule);
exports.PluginsModule = PluginsModule;


/***/ }

});
//# sourceMappingURL=7.js.map