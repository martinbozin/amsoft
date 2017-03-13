webpackJsonp([14],{

/***/ 244:
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
var LaddaConfigArgs = (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());
exports.LaddaConfigArgs = LaddaConfigArgs;
exports.configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    return LaddaConfig;
}());
LaddaConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [LaddaConfigArgs])
], LaddaConfig);
exports.LaddaConfig = LaddaConfig;
//# sourceMappingURL=ladda-config.js.map

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var LoadingButtonsComponent = (function () {
    function LoadingButtonsComponent() {
        // trigger-variable for Ladda
        this.isLoading = false;
    }
    LoadingButtonsComponent.prototype.toggleLoading = function () {
        this.isLoading = !this.isLoading;
    };
    return LoadingButtonsComponent;
}());
LoadingButtonsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(575)
    })
], LoadingButtonsComponent);
exports.LoadingButtonsComponent = LoadingButtonsComponent;


/***/ },

/***/ 419:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var ladda_config_1 = __webpack_require__(244);
var Ladda = __webpack_require__(583);
var LaddaDirective = (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in ladda_config_1.configAttributes) {
            var configValue = config[ladda_config_1.configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LaddaDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LaddaDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._ladda = Ladda.create(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LaddaDirective.prototype.ngOnDestroy = function () {
        this._ladda.remove();
    };
    LaddaDirective.prototype.updateLadda = function (previousValue) {
        if (this.loading === false) {
            if (previousValue !== false) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (previousValue === false) {
            this._ladda.start();
        }
        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    };
    LaddaDirective.prototype.updateDisabled = function () {
        if (this.disabled) {
            this.el.setAttribute('disabled', '');
        }
        else {
            this.el.removeAttribute('disabled');
        }
    };
    return LaddaDirective;
}());
__decorate([
    core_1.Input('ladda'),
    __metadata("design:type", Object)
], LaddaDirective.prototype, "loading", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Boolean)
], LaddaDirective.prototype, "disabled", void 0);
LaddaDirective = __decorate([
    core_1.Directive({
        selector: '[ladda]'
    }),
    __param(1, core_1.Inject(ladda_config_1.LaddaConfig)), __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [core_1.ElementRef, ladda_config_1.LaddaConfigArgs])
], LaddaDirective);
exports.LaddaDirective = LaddaDirective;
//# sourceMappingURL=ladda.directive.js.map

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ladda_directive_1 = __webpack_require__(419);
var ladda_config_1 = __webpack_require__(244);
var LaddaModule = LaddaModule_1 = (function () {
    function LaddaModule() {
    }
    LaddaModule.forRoot = function (config) {
        return {
            ngModule: LaddaModule_1,
            providers: [
                { provide: ladda_config_1.LaddaConfig, useValue: config }
            ]
        };
    };
    return LaddaModule;
}());
LaddaModule = LaddaModule_1 = __decorate([
    core_1.NgModule({
        declarations: [ladda_directive_1.LaddaDirective],
        exports: [ladda_directive_1.LaddaDirective],
    })
], LaddaModule);
exports.LaddaModule = LaddaModule;
var LaddaModule_1;
//# sourceMappingURL=module.js.map

/***/ },

/***/ 442:
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
var loading_buttons_component_1 = __webpack_require__(270);
var routes = [
    {
        path: '',
        component: loading_buttons_component_1.LoadingButtonsComponent,
        data: {
            title: 'Loading Buttons - Ladda'
        }
    }
];
var LoadingButtonsRoutingModule = (function () {
    function LoadingButtonsRoutingModule() {
    }
    return LoadingButtonsRoutingModule;
}());
LoadingButtonsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], LoadingButtonsRoutingModule);
exports.LoadingButtonsRoutingModule = LoadingButtonsRoutingModule;


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
var common_1 = __webpack_require__(13);
// Loading Buttons
var angular2_ladda_1 = __webpack_require__(420);
var loading_buttons_component_1 = __webpack_require__(270);
// Routing
var loading_buttons_routing_module_1 = __webpack_require__(442);
var LoadingButtonsModule = (function () {
    function LoadingButtonsModule() {
    }
    return LoadingButtonsModule;
}());
LoadingButtonsModule = __decorate([
    core_1.NgModule({
        imports: [
            loading_buttons_routing_module_1.LoadingButtonsRoutingModule,
            common_1.CommonModule,
            angular2_ladda_1.LaddaModule
        ],
        declarations: [
            loading_buttons_component_1.LoadingButtonsComponent
        ]
    })
], LoadingButtonsModule);
exports.LoadingButtonsModule = LoadingButtonsModule;


/***/ },

/***/ 575:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <i class=\"icon-cursor\"></i> Loading buttons - Ladda\n            <div class=\"card-actions\">\n                <a href=\"https://github.com/hakimel/Ladda\">\n                    <small class=\"text-muted\">docs</small>\n                </a>\n            </div>\n        </div>\n        <div class=\"card-block\">\n            <p>\n                A UI concept which merges loading indicators into the action that invoked them. Primarily intended for use with forms where it gives users immediate feedback upon submit rather than leaving them wondering while the browser does its thing. For a real-world\n                example, check out any of the forms on <a href=\"http://slides.com\">slides.com</a>.\n            </p>\n\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary\" (click)='toggleLoading()'>Toggle Ladda in button below</button>\n            </div>\n\n            <hr class=\"my-2\">\n\n            <div class=\"row text-center\">\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>expand-left</h6>\n                    <button class=\"btn btn-success btn-ladda\" data-style=\"expand-left\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>expand-right</h6>\n                    <button class=\"btn btn-success btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>expand-up</h6>\n                    <button class=\"btn btn-success btn-ladda\" data-style=\"expand-up\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>expand-down</h6>\n                    <button class=\"btn btn-success btn-ladda\" data-style=\"expand-down\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>contract</h6>\n                    <button class=\"btn btn-danger btn-ladda\" data-style=\"contract\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>contract-overlay</h6>\n                    <button class=\"btn btn-danger btn-ladda\" data-style=\"contract-overlay\" style=\"z-index: 10;\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>zoom-in</h6>\n                    <button class=\"btn btn-danger btn-ladda\" data-style=\"zoom-in\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>zoom-out</h6>\n                    <button class=\"btn btn-danger btn-ladda\" data-style=\"zoom-out\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>slide-left</h6>\n                    <button class=\"btn btn-info btn-ladda\" data-style=\"slide-left\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>slide-right</h6>\n                    <button class=\"btn btn-info btn-ladda\" data-style=\"slide-right\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>slide-up</h6>\n                    <button class=\"btn btn-info btn-ladda\" data-style=\"slide-up\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-3 py-2\">\n                    <h6>slide-down</h6>\n                    <button class=\"btn btn-info btn-ladda\" data-style=\"slide-down\" [ladda]='isLoading'>Submit</button>\n                </div>\n            </div>\n\n            <hr class=\"my-2\">\n\n            <h4 class=\"text-center\">Sizes</h4>\n            <div class=\"row text-center\">\n                <div class=\"col-md-4 py-2\">\n                    <h6>Small</h6>\n                    <button class=\"btn btn-sm btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-4 py-2\">\n                    <h6>Normall</h6>\n                    <button class=\"btn btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n                </div>\n\n                <div class=\"col-md-4 py-2\">\n                    <h6>Large</h6>\n                    <button class=\"btn btn-lg btn-primary btn-ladda\" data-style=\"expand-right\" [ladda]='isLoading'>Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.0 (2016-03-08, 09:31)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
!function(a,b){ true?module.exports=b(__webpack_require__(584)):"function"==typeof define&&define.amd?define(["spin"],b):a.Ladda=b(a.Spinner)}(this,function(a){"use strict";function b(a){if("undefined"==typeof a)return void console.warn("Ladda button target must be defined.");if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var b=document.createElement("span");b.className="ladda-label",i(a,b)}var c,d=a.querySelector(".ladda-spinner");d||(d=document.createElement("span"),d.className="ladda-spinner"),a.appendChild(d);var e,f={start:function(){return c||(c=g(a)),a.setAttribute("disabled",""),a.setAttribute("data-loading",""),clearTimeout(e),c.spin(d),this.setProgress(0),this},startAfter:function(a){return clearTimeout(e),e=setTimeout(function(){f.start()},a),this},stop:function(){return a.removeAttribute("disabled"),a.removeAttribute("data-loading"),clearTimeout(e),c&&(e=setTimeout(function(){c.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(b){b=Math.max(Math.min(b,1),0);var c=a.querySelector(".ladda-progress");0===b&&c&&c.parentNode?c.parentNode.removeChild(c):(c||(c=document.createElement("div"),c.className="ladda-progress",a.appendChild(c)),c.style.width=(b||0)*a.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),a.setAttribute("disabled",""),this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(e),a.removeAttribute("disabled",""),a.removeAttribute("data-loading",""),c&&(c.stop(),c=null);for(var b=0,d=j.length;d>b;b++)if(f===j[b]){j.splice(b,1);break}}};return j.push(f),f}function c(a,b){for(;a.parentNode&&a.tagName!==b;)a=a.parentNode;return b===a.tagName?a:void 0}function d(a){for(var b=["input","textarea","select"],c=[],d=0;d<b.length;d++)for(var e=a.getElementsByTagName(b[d]),f=0;f<e.length;f++)e[f].hasAttribute("required")&&c.push(e[f]);return c}function e(a,e){e=e||{};var f=[];"string"==typeof a?f=h(document.querySelectorAll(a)):"object"==typeof a&&"string"==typeof a.nodeName&&(f=[a]);for(var g=0,i=f.length;i>g;g++)!function(){var a=f[g];if("function"==typeof a.addEventListener){var h=b(a),i=-1;a.addEventListener("click",function(b){var f=!0,g=c(a,"FORM");if("undefined"!=typeof g)if("function"==typeof g.checkValidity)f=g.checkValidity();else for(var j=d(g),k=0;k<j.length;k++)""===j[k].value.replace(/^\s+|\s+$/g,"")&&(f=!1),"checkbox"!==j[k].type&&"radio"!==j[k].type||j[k].checked||(f=!1),"email"===j[k].type&&(f=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(j[k].value));f&&(h.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(i),i=setTimeout(h.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[h]))},!1)}}()}function f(){for(var a=0,b=j.length;b>a;a++)j[a].stop()}function g(b){var c,d,e=b.offsetHeight;0===e&&(e=parseFloat(window.getComputedStyle(b).height)),e>32&&(e*=.8),b.hasAttribute("data-spinner-size")&&(e=parseInt(b.getAttribute("data-spinner-size"),10)),b.hasAttribute("data-spinner-color")&&(c=b.getAttribute("data-spinner-color")),b.hasAttribute("data-spinner-lines")&&(d=parseInt(b.getAttribute("data-spinner-lines"),10));var f=.2*e,g=.6*f,h=7>f?2:3;return new a({color:c||"#fff",lines:d||12,radius:f,length:g,width:h,zIndex:"auto",top:"auto",left:"auto",className:""})}function h(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}function i(a,b){var c=document.createRange();c.selectNodeContents(a),c.surroundContents(b),a.appendChild(b)}var j=[];return{bind:e,create:b,stopAll:f}});

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  // CommonJS
  if (true) {
    module.exports = factory();
  }
  // AMD module
  else if (typeof define == 'function' && define.amd) {
    define(factory);
  }
  // Browser global
  else {
    root.Spinner = factory();
  }

}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));


/***/ }

});
//# sourceMappingURL=14.js.map