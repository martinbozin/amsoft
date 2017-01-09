webpackJsonp([0],{

/***/ 107:
/***/ function(module, exports) {

module.exports = "<h3> Click this button to resize using animation</h3>\n\n<button (click)=\"toggleAnimation()\" [@buttonState]=\"buttonState\"> {{buttonState}} </button>";

/***/ },

/***/ 108:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-4\" *ngFor=\"let example of examples\">\n    <div class=\"card card-block\">\n      <h3 class=\"card-title\">{{example.title}}</h3>\n      <p class=\"card-text\">{{example.description}}</p>\n      <a class=\"btn btn-primary\" routerLink=\"{{example.route}}\">View »</a>\n    </div>\n  </div>\n</div>";

/***/ },

/***/ 109:
/***/ function(module, exports) {

module.exports = "<h3>Angular 2 examples kitchen sink</h3>\n\n<router-outlet></router-outlet>";

/***/ },

/***/ 110:
/***/ function(module, exports) {

module.exports = "A typeahead example that gets values from a static <code>string[]</code>\n<ul>\n  <li><code>debounceTime</code> operator</li>\n  <li>kicks in only if 2+ characters typed</li>\n  <li>limits to 10 results</li>\n</ul>\n\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n<hr>\n<pre>Model: {{ model | json }}</pre>\n\n\nA typeahead example that gets values from the <code>WikipediaService</code>\n<ul>\n  <li>remote data retrieval</li>\n  <li><code>debounceTime</code> operator</li>\n  <li><code>do</code> operator</li>\n  <li><code>distinctUntilChanged</code> operator</li>\n  <li><code>switchMap</code> operator</li>\n</ul>\n\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"wikiModel\" [ngbTypeahead]=\"searchWiki\" placeholder=\"Wikipedia search\" /><span *ngIf=\"_searching\"> searching...</span>\n<hr>\n\n<pre>Model: {{ wikiModel | json }}</pre>";

/***/ },

/***/ 118:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 119:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 120:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 121:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(410);

/***/ },

/***/ 74:
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
var shared_module_1 = __webpack_require__(19);
var examples_component_1 = __webpack_require__(84);
var examples_home_component_1 = __webpack_require__(83);
var animation_component_1 = __webpack_require__(82);
var typeahead_component_1 = __webpack_require__(85);
var examples_routes_1 = __webpack_require__(94);
var wikipedia_service_1 = __webpack_require__(86);
var ExamplesModule = (function () {
    function ExamplesModule() {
    }
    return ExamplesModule;
}());
ExamplesModule = __decorate([
    core_1.NgModule({
        imports: [examples_routes_1.routing, shared_module_1.SharedModule],
        declarations: [
            examples_component_1.ExamplesComponent,
            examples_home_component_1.ExamplesHomeComponent,
            // Examples
            animation_component_1.AnimationComponent,
            typeahead_component_1.TypeaheadComponent
        ],
        providers: [wikipedia_service_1.WikipediaService]
    }),
    __metadata("design:paramtypes", [])
], ExamplesModule);
exports.ExamplesModule = ExamplesModule;


/***/ },

/***/ 82:
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
var AnimationComponent = (function () {
    function AnimationComponent() {
        this.buttonState = 'inactive';
    }
    AnimationComponent.prototype.ngOnInit = function () { };
    AnimationComponent.prototype.toggleAnimation = function () {
        this.buttonState = this.buttonState === 'active' ? 'inactive' : 'active';
    };
    return AnimationComponent;
}());
AnimationComponent = __decorate([
    core_1.Component({
        selector: 'appc-animation',
        template: __webpack_require__(107),
        styles: [__webpack_require__(118)],
        animations: [
            core_1.trigger('buttonState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.5)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;


/***/ },

/***/ 83:
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
var ExamplesHomeComponent = (function () {
    function ExamplesHomeComponent() {
    }
    ExamplesHomeComponent.prototype.ngOnInit = function () {
        this.examples = [
            { route: 'animation', title: 'Animation', description: 'An example using angular 2 webanimations api' },
            { route: 'typeahead', title: 'Typeahead', description: 'An example showing ngbootstrap\'s typeahed control' }
        ];
    };
    return ExamplesHomeComponent;
}());
ExamplesHomeComponent = __decorate([
    core_1.Component({
        selector: 'appc-examples-home',
        template: __webpack_require__(108),
        styles: [__webpack_require__(119)]
    }),
    __metadata("design:paramtypes", [])
], ExamplesHomeComponent);
exports.ExamplesHomeComponent = ExamplesHomeComponent;


/***/ },

/***/ 84:
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
var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    core_1.Component({
        selector: 'appc-examples',
        template: __webpack_require__(109),
        styles: [__webpack_require__(120)]
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);
exports.ExamplesComponent = ExamplesComponent;


/***/ },

/***/ 85:
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
var Rx_1 = __webpack_require__(124);
var wikipedia_service_1 = __webpack_require__(86);
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var TypeaheadComponent = (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); });
        };
        this.searchWiki = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function (term) { _this._searching = term.length > 0; })
                .switchMap(function (term) { return term === '' ? Rx_1.Observable.of([]) : _this._service.search(term); })
                .do(function () { _this._searching = false; });
        };
    }
    TypeaheadComponent.prototype.ngOnInit = function () {
    };
    return TypeaheadComponent;
}());
TypeaheadComponent = __decorate([
    core_1.Component({
        selector: 'appc-typeahead',
        template: __webpack_require__(110),
        styles: [__webpack_require__(121)]
    }),
    __metadata("design:paramtypes", [wikipedia_service_1.WikipediaService])
], TypeaheadComponent);
exports.TypeaheadComponent = TypeaheadComponent;


/***/ },

/***/ 86:
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
var http_1 = __webpack_require__(3);
var WikipediaService = (function () {
    function WikipediaService(_jsonp) {
        this._jsonp = _jsonp;
    }
    WikipediaService.prototype.search = function (term) {
        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
        var params = new http_1.URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    return WikipediaService;
}());
WikipediaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], WikipediaService);
exports.WikipediaService = WikipediaService;


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(2);
var examples_component_1 = __webpack_require__(84);
var examples_home_component_1 = __webpack_require__(83);
var animation_component_1 = __webpack_require__(82);
var typeahead_component_1 = __webpack_require__(85);
var routes = [
    {
        path: '', component: examples_component_1.ExamplesComponent, children: [
            { path: '', component: examples_home_component_1.ExamplesHomeComponent },
            { path: 'animation', component: animation_component_1.AnimationComponent },
            { path: 'typeahead', component: typeahead_component_1.TypeaheadComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }

});
//# sourceMappingURL=0.js.map