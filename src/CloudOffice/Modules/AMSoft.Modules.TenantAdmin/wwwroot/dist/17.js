webpackJsonp([17],{

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SpinnersComponent = (function () {
    function SpinnersComponent() {
    }
    return SpinnersComponent;
}());
SpinnersComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(572)
    })
], SpinnersComponent);
exports.SpinnersComponent = SpinnersComponent;


/***/ },

/***/ 443:
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
var spinners_component_1 = __webpack_require__(269);
var routes = [
    {
        path: '',
        component: spinners_component_1.SpinnersComponent,
        data: {
            title: 'Spinners'
        }
    }
];
var SpinnersRoutingModule = (function () {
    function SpinnersRoutingModule() {
    }
    return SpinnersRoutingModule;
}());
SpinnersRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], SpinnersRoutingModule);
exports.SpinnersRoutingModule = SpinnersRoutingModule;


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
// Spinners
var spinners_component_1 = __webpack_require__(269);
//Routing
var spinners_routing_module_1 = __webpack_require__(443);
//
var SpinnersModule = (function () {
    function SpinnersModule() {
    }
    return SpinnersModule;
}());
SpinnersModule = __decorate([
    core_1.NgModule({
        imports: [
            spinners_routing_module_1.SpinnersRoutingModule,
            common_1.CommonModule,
        ],
        declarations: [
            spinners_component_1.SpinnersComponent
        ]
    })
], SpinnersModule);
exports.SpinnersModule = SpinnersModule;


/***/ },

/***/ 572:
/***/ function(module, exports) {

module.exports = "<div class=\"animated\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <i class=\"fa fa-spinner\"></i> Spinners - SpinKit\r\n            <div class=\"card-actions\">\r\n                <a href=\"https://github.com/tobiasahlin/SpinKit\">\r\n                    <small class=\"text-muted\">docs</small>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n            <p>\r\n                Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Rotating plane\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-rotating-plane\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Double bounce\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-double-bounce\">\r\n                        <div class=\"sk-child sk-double-bounce1\"></div>\r\n                        <div class=\"sk-child sk-double-bounce2\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Wave\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-wave\">\r\n                        <div class=\"sk-rect sk-rect1\"></div>\r\n                        <div class=\"sk-rect sk-rect2\"></div>\r\n                        <div class=\"sk-rect sk-rect3\"></div>\r\n                        <div class=\"sk-rect sk-rect4\"></div>\r\n                        <div class=\"sk-rect sk-rect5\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Wandering cubes\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-wandering-cubes\">\r\n                        <div class=\"sk-cube sk-cube1\"></div>\r\n                        <div class=\"sk-cube sk-cube2\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Pulse\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-spinner sk-spinner-pulse\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Chasing dots\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-chasing-dots\">\r\n                        <div class=\"sk-child sk-dot1\"></div>\r\n                        <div class=\"sk-child sk-dot2\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Three bounce\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-three-bounce\">\r\n                        <div class=\"sk-child sk-bounce1\"></div>\r\n                        <div class=\"sk-child sk-bounce2\"></div>\r\n                        <div class=\"sk-child sk-bounce3\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Circle\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-circle\">\r\n                        <div class=\"sk-circle1 sk-child\"></div>\r\n                        <div class=\"sk-circle2 sk-child\"></div>\r\n                        <div class=\"sk-circle3 sk-child\"></div>\r\n                        <div class=\"sk-circle4 sk-child\"></div>\r\n                        <div class=\"sk-circle5 sk-child\"></div>\r\n                        <div class=\"sk-circle6 sk-child\"></div>\r\n                        <div class=\"sk-circle7 sk-child\"></div>\r\n                        <div class=\"sk-circle8 sk-child\"></div>\r\n                        <div class=\"sk-circle9 sk-child\"></div>\r\n                        <div class=\"sk-circle10 sk-child\"></div>\r\n                        <div class=\"sk-circle11 sk-child\"></div>\r\n                        <div class=\"sk-circle12 sk-child\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Cube grid\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-cube-grid\">\r\n                        <div class=\"sk-cube sk-cube1\"></div>\r\n                        <div class=\"sk-cube sk-cube2\"></div>\r\n                        <div class=\"sk-cube sk-cube3\"></div>\r\n                        <div class=\"sk-cube sk-cube4\"></div>\r\n                        <div class=\"sk-cube sk-cube5\"></div>\r\n                        <div class=\"sk-cube sk-cube6\"></div>\r\n                        <div class=\"sk-cube sk-cube7\"></div>\r\n                        <div class=\"sk-cube sk-cube8\"></div>\r\n                        <div class=\"sk-cube sk-cube9\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Fading circle\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-fading-circle\">\r\n                        <div class=\"sk-circle1 sk-circle\"></div>\r\n                        <div class=\"sk-circle2 sk-circle\"></div>\r\n                        <div class=\"sk-circle3 sk-circle\"></div>\r\n                        <div class=\"sk-circle4 sk-circle\"></div>\r\n                        <div class=\"sk-circle5 sk-circle\"></div>\r\n                        <div class=\"sk-circle6 sk-circle\"></div>\r\n                        <div class=\"sk-circle7 sk-circle\"></div>\r\n                        <div class=\"sk-circle8 sk-circle\"></div>\r\n                        <div class=\"sk-circle9 sk-circle\"></div>\r\n                        <div class=\"sk-circle10 sk-circle\"></div>\r\n                        <div class=\"sk-circle11 sk-circle\"></div>\r\n                        <div class=\"sk-circle12 sk-circle\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-spinner\"></i> Folding Cube\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"sk-folding-cube\">\r\n                        <div class=\"sk-cube1 sk-cube\"></div>\r\n                        <div class=\"sk-cube2 sk-cube\"></div>\r\n                        <div class=\"sk-cube4 sk-cube\"></div>\r\n                        <div class=\"sk-cube3 sk-cube\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }

});
//# sourceMappingURL=17.js.map