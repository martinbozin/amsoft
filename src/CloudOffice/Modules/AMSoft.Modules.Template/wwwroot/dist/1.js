webpackJsonp([1],{

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModalBackdropComponent; });



var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].FADE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].IN, value);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: '',
                    // tslint:disable-next-line
                    host: { 'class': __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    return ModalBackdropComponent;
}());
//# sourceMappingURL=modal-backdrop.component.js.map

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(exports, "ModalDirective", function() { return ModalDirective; });
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events








var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when the hide instance method has been called. */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        this._config = this._config || this.getConfig();
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
            this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].OPEN, true);
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].IN, false);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SHOW, false);
        }
        // this._addClassIn = false;
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setElementProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].IN, true);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SHOW, true);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
                _this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].OPEN, false);
            }
            _this.resetAdjustments();
            _this.resetScrollbar();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: false });
            this.backdrop = this._backdrop._componentRef;
            if (this.isAnimated) {
                this.backdrop.instance.isAnimated = this.isAnimated;
                __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.backdrop.instance.element.nativeElement);
            }
            this.backdrop.instance.isShown = true;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */]) {
            return;
        }
        var fixedEl = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].querySelector(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["c" /* Selector */].FIXED_CONTENT);
        if (!fixedEl) {
            return;
        }
        var bodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].getStyles(fixedEl).paddingRight || 0, 10);
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight = (bodyPadding + this.scrollbarWidth) + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, 'div', void 0);
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());
//# sourceMappingURL=modal.component.js.map

/***/ },

/***/ 249:
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
var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(555)
    }),
    __metadata("design:paramtypes", [])
], ButtonsComponent);
exports.ButtonsComponent = ButtonsComponent;


/***/ },

/***/ 250:
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
var CardsComponent = (function () {
    function CardsComponent() {
    }
    return CardsComponent;
}());
CardsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(556)
    }),
    __metadata("design:paramtypes", [])
], CardsComponent);
exports.CardsComponent = CardsComponent;


/***/ },

/***/ 251:
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
var FormsComponent = (function () {
    function FormsComponent() {
    }
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(557)
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);
exports.FormsComponent = FormsComponent;


/***/ },

/***/ 252:
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
var modal_component_1 = __webpack_require__(226);
var ModalsComponent = (function () {
    function ModalsComponent() {
    }
    ModalsComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ModalsComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return ModalsComponent;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", modal_component_1.ModalDirective)
], ModalsComponent.prototype, "childModal", void 0);
ModalsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(558)
    })
], ModalsComponent);
exports.ModalsComponent = ModalsComponent;


/***/ },

/***/ 253:
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
var SocialButtonsComponent = (function () {
    function SocialButtonsComponent() {
    }
    return SocialButtonsComponent;
}());
SocialButtonsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(559)
    }),
    __metadata("design:paramtypes", [])
], SocialButtonsComponent);
exports.SocialButtonsComponent = SocialButtonsComponent;


/***/ },

/***/ 254:
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
var SwitchesComponent = (function () {
    function SwitchesComponent() {
    }
    return SwitchesComponent;
}());
SwitchesComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(560)
    }),
    __metadata("design:paramtypes", [])
], SwitchesComponent);
exports.SwitchesComponent = SwitchesComponent;


/***/ },

/***/ 255:
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
var TablesComponent = (function () {
    function TablesComponent() {
    }
    return TablesComponent;
}());
TablesComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(561)
    }),
    __metadata("design:paramtypes", [])
], TablesComponent);
exports.TablesComponent = TablesComponent;


/***/ },

/***/ 256:
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
var TabsComponent = (function () {
    function TabsComponent() {
    }
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(562)
    }),
    __metadata("design:paramtypes", [])
], TabsComponent);
exports.TabsComponent = TabsComponent;


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_ref_class__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_triggers__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentLoader; });



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     * @param _viewContainerRef
     * @param _elementRef
     * @param _injector
     * @param _renderer
     * @param _componentFactoryResolver
     * @param _ngZone
     * @param _posService
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _posService) {
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._posService = _posService;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._viewContainerRef
                .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            this._componentRef.changeDetectorRef.markForCheck();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (this._componentRef) {
            this.onBeforeHide.emit(this._componentRef.instance);
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
            this._componentRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
            this._componentRef = null;
            this.onHidden.emit();
        }
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = this._viewContainerRef
                .createEmbeddedView(content);
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
//# sourceMappingURL=component-loader.class.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentLoaderFactory; });



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */], },
    ]; };
    return ComponentLoaderFactory;
}());
//# sourceMappingURL=component-loader.factory.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
//# sourceMappingURL=content-ref.class.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClassName; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Selector; });
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true,
    ignoreBackdropClick: false
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__(337);
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ exports["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ },

/***/ 426:
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
var buttons_component_1 = __webpack_require__(249);
var cards_component_1 = __webpack_require__(250);
var forms_component_1 = __webpack_require__(251);
var modals_component_1 = __webpack_require__(252);
var social_buttons_component_1 = __webpack_require__(253);
var switches_component_1 = __webpack_require__(254);
var tables_component_1 = __webpack_require__(255);
var tabs_component_1 = __webpack_require__(256);
var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'cards',
                component: cards_component_1.CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: forms_component_1.FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'modals',
                component: modals_component_1.ModalsComponent,
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'social-buttons',
                component: social_buttons_component_1.SocialButtonsComponent,
                data: {
                    title: 'Social buttons'
                }
            },
            {
                path: 'switches',
                component: switches_component_1.SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: tables_component_1.TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent,
                data: {
                    title: 'Tabs'
                }
            }
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    return ComponentsRoutingModule;
}());
ComponentsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ComponentsRoutingModule);
exports.ComponentsRoutingModule = ComponentsRoutingModule;


/***/ },

/***/ 555:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Options</strong>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-link\">Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>With Icons</strong>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-star\"></i>&nbsp; Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-lightbulb-o\"></i>&nbsp; Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-magic\"></i>&nbsp; Success</button>\n                    <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-map-marker\"></i>&nbsp; Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-rss\"></i>&nbsp; Danger</button>\n                    <button type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-link\"></i>&nbsp; Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Size Large</strong>\n                    <small>Add this class\n                        <code>.btn-lg</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-lg\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success btn-lg\">Success</button>\n                    <button type=\"button\" class=\"btn btn-info btn-lg\">Info</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-lg\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-lg\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-link btn-lg\">Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Size Small</strong>\n                    <small>Add this class\n                        <code>.btn-sm</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success btn-sm\">Success</button>\n                    <button type=\"button\" class=\"btn btn-info btn-sm\">Info</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-sm\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-link btn-sm\">Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Disabled state</strong>\n                    <small>Add this\n                        <code>disabled=\"disabled\"</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary\" disabled=\"disabled\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary\" disabled=\"disabled\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success\" disabled=\"disabled\">Success</button>\n                    <button type=\"button\" class=\"btn btn-info\" disabled=\"disabled\">Info</button>\n                    <button type=\"button\" class=\"btn btn-warning\" disabled=\"disabled\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger\" disabled=\"disabled\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-link\" disabled=\"disabled\">Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Active state</strong>\n                    <small>Add this class\n                        <code>.active</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-primary active\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-secondary active\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success active\">Success</button>\n                    <button type=\"button\" class=\"btn btn-info active\">Info</button>\n                    <button type=\"button\" class=\"btn btn-warning active\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger active\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-link active\">Link</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Block Level Buttons</strong>\n                    <small>Add this class\n                        <code>.btn-block</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-success btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-info btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-link btn-lg btn-block\">Block level button</button>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Options</strong>\n                </div>\n                <div class=\"card-block\">\n                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n                    <!-- Secondary, outline button -->\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\n                    <!-- Indicates a successful or positive action -->\n                    <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\n                    <!-- Indicates caution should be taken with this action -->\n                    <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\n                    <!-- Indicates a dangerous or potentially negative action -->\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>With Icons</strong>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"fa fa-star\"></i>&nbsp; Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary\"><i class=\"fa fa-lightbulb-o\"></i>&nbsp; Secondary</button>\n                    <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"fa fa-magic\"></i>&nbsp; Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"fa fa-map-marker\"></i>&nbsp; Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"fa fa-rss\"></i>&nbsp; Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Size Large</strong>\n                    <small>Add this class\n                        <code>.btn-lg</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-lg\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-lg\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-lg\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-lg\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-lg\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Size Small</strong>\n                    <small>Add this class\n                        <code>.btn-sm</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-sm\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-sm\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-sm\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-sm\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Disabled state</strong>\n                    <small>Add this\n                        <code>disabled=\"disabled\"</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\" disabled=\"disabled\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary\" disabled=\"disabled\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-success\" disabled=\"disabled\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-info\" disabled=\"disabled\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning\" disabled=\"disabled\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\" disabled=\"disabled\">Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Active state</strong>\n                    <small>Add this class\n                        <code>.active</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary active\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-secondary active\">Secondary</button>\n                    <button type=\"button\" class=\"btn btn-outline-success active\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-info active\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning active\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger active\">Danger</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Block Level Buttons</strong>\n                    <small>Add this class\n                        <code>.btn-block</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-lg btn-block\">Block level button</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg btn-block\">Block level button</button>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 556:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n                <div class=\"card-footer\">Card footer</div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-check\"></i>Card with icon\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Card with switch\n                    <label class=\"switch switch-sm switch-text switch-info float-right mb-0\">\n                        <input type=\"checkbox\" class=\"switch-input\">\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Card with label\n                    <span class=\"badge badge-success float-right\">Success</span>\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Card with label\n                    <span class=\"badge badge-pill badge-danger float-right\">42</span>\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-primary\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-secondary\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-success\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-info\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-warning\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-outline-danger\">\n                <div class=\"card-header\">\n                    Card outline\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-primary\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-secondary\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-success\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-info\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-warning\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-accent-danger\">\n                <div class=\"card-header\">\n                    Card with accent\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-primary text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-success text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-info text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-warning text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-danger text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-primary text-center\">\n                <div class=\"card-block\">\n                    <blockquote class=\"card-blockquote\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer>Someone famous in\n                            <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-primary\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-success\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-info\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-warning\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"card card-inverse card-danger\">\n                <div class=\"card-header\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex\n                    ea commodo consequat.\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 557:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Credit Card</strong>\n                    <small>Form</small>\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.row-->\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"ccnumber\">Credit Card Number</label>\n                                <input type=\"text\" class=\"form-control\" id=\"ccnumber\" placeholder=\"0000 0000 0000 0000\">\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.row-->\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"ccmonth\">Month</label>\n                            <select class=\"form-control\" id=\"ccmonth\">\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                                <option>6</option>\n                                <option>7</option>\n                                <option>8</option>\n                                <option>9</option>\n                                <option>10</option>\n                                <option>11</option>\n                                <option>12</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"ccyear\">Year</label>\n                            <select class=\"form-control\" id=\"ccyear\">\n                                <option>2014</option>\n                                <option>2015</option>\n                                <option>2016</option>\n                                <option>2017</option>\n                                <option>2018</option>\n                                <option>2019</option>\n                                <option>2020</option>\n                                <option>2021</option>\n                                <option>2022</option>\n                                <option>2023</option>\n                                <option>2024</option>\n                                <option>2025</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"cvv\">CVV/CVC</label>\n                                <input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"123\">\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.row-->\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Company</strong>\n                    <small>Form</small>\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"form-group\">\n                        <label for=\"company\">Company</label>\n                        <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Enter your company name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"vat\">VAT</label>\n                        <input type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"PL1234567890\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"street\">Street</label>\n                        <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Enter street name\">\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter your city\">\n                        </div>\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"postal-code\">Postal Code</label>\n                            <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"Postal Code\">\n                        </div>\n                    </div>\n                    <!--/.row-->\n                    <div class=\"form-group\">\n                        <label for=\"country\">Country</label>\n                        <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country name\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Basic Form</strong>Elements\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\">Static</label>\n                            <div class=\"col-md-9\">\n                                <p class=\"form-control-static\">Username</p>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Text Input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n                                <span class=\"help-block\">This is a help text</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"email-input\">Email Input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\">\n                                <span class=\"help-block\">Please enter your email</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"password-input\">Password</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\">\n                                <span class=\"help-block\">Please enter a complex password</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"disabled-input\">Disabled Input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"textarea-input\">Textarea</label>\n                            <div class=\"col-md-9\">\n                                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"select\">Select</label>\n                            <div class=\"col-md-9\">\n                                <select id=\"select\" name=\"select\" class=\"form-control\" size=\"1\">\n                                    <option value=\"0\">Please select</option>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"select\">Select Large</label>\n                            <div class=\"col-md-9\">\n                                <select id=\"select\" name=\"select\" class=\"form-control input-lg\" size=\"1\">\n                                    <option value=\"0\">Please select</option>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"select\">Select Small</label>\n                            <div class=\"col-md-9\">\n                                <select id=\"select\" name=\"select\" class=\"form-control input-sm\" size=\"1\">\n                                    <option value=\"0\">Please select</option>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"select\">Disabled Select</label>\n                            <div class=\"col-md-9\">\n                                <select id=\"disabledSelect\" class=\"form-control\" disabled>\n                                    <option value=\"0\">Please select</option>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"multiple-select\">Multiple select</label>\n                            <div class=\"col-md-9\">\n                                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\n                                    <option value=\"1\">Option #1</option>\n                                    <option value=\"2\">Option #2</option>\n                                    <option value=\"3\">Option #3</option>\n                                    <option value=\"4\">Option #4</option>\n                                    <option value=\"5\">Option #5</option>\n                                    <option value=\"6\">Option #6</option>\n                                    <option value=\"7\">Option #7</option>\n                                    <option value=\"8\">Option #8</option>\n                                    <option value=\"9\">Option #9</option>\n                                    <option value=\"10\">Option #10</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\">Radios</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"radio\">\n                                    <label for=\"radio1\">\n                                        <input type=\"radio\" id=\"radio1\" name=\"radios\" value=\"option1\">Option 1\n                                    </label>\n                                </div>\n                                <div class=\"radio\">\n                                    <label for=\"radio2\">\n                                        <input type=\"radio\" id=\"radio2\" name=\"radios\" value=\"option2\">Option 2\n                                    </label>\n                                </div>\n                                <div class=\"radio\">\n                                    <label for=\"radio3\">\n                                        <input type=\"radio\" id=\"radio3\" name=\"radios\" value=\"option3\">Option 3\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\">Inline Radios</label>\n                            <div class=\"col-md-9\">\n                                <label class=\"radio-inline\" for=\"inline-radio1\">\n                                    <input type=\"radio\" id=\"inline-radio1\" name=\"inline-radios\" value=\"option1\">One\n                                </label>\n                                <label class=\"radio-inline\" for=\"inline-radio2\">\n                                    <input type=\"radio\" id=\"inline-radio2\" name=\"inline-radios\" value=\"option2\">Two\n                                </label>\n                                <label class=\"radio-inline\" for=\"inline-radio3\">\n                                    <input type=\"radio\" id=\"inline-radio3\" name=\"inline-radios\" value=\"option3\">Three\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\">Checkboxes</label>\n                            <div class=\"col-md-9\">\n                                <div class=\"checkbox\">\n                                    <label for=\"checkbox1\">\n                                        <input type=\"checkbox\" id=\"checkbox1\" name=\"checkbox1\" value=\"option1\">Option 1\n                                    </label>\n                                </div>\n                                <div class=\"checkbox\">\n                                    <label for=\"checkbox2\">\n                                        <input type=\"checkbox\" id=\"checkbox2\" name=\"checkbox2\" value=\"option2\">Option 2\n                                    </label>\n                                </div>\n                                <div class=\"checkbox\">\n                                    <label for=\"checkbox3\">\n                                        <input type=\"checkbox\" id=\"checkbox3\" name=\"checkbox3\" value=\"option3\">Option 3\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\">Inline Checkboxes</label>\n                            <div class=\"col-md-9\">\n                                <label class=\"checkbox-inline\" for=\"inline-checkbox1\">\n                                    <input type=\"checkbox\" id=\"inline-checkbox1\" name=\"inline-checkbox1\" value=\"option1\">One\n                                </label>\n                                <label class=\"checkbox-inline\" for=\"inline-checkbox2\">\n                                    <input type=\"checkbox\" id=\"inline-checkbox2\" name=\"inline-checkbox2\" value=\"option2\">Two\n                                </label>\n                                <label class=\"checkbox-inline\" for=\"inline-checkbox3\">\n                                    <input type=\"checkbox\" id=\"inline-checkbox3\" name=\"inline-checkbox3\" value=\"option3\">Three\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"file-input\">File input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"file\" id=\"file-input\" name=\"file-input\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"file-multiple-input\">Multiple File input</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Inline</strong>Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-inline\">\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"if-email\">Email</label>\n                            <input type=\"email\" id=\"if-email\" name=\"if-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"sr-only\" for=\"if-password\">Password</label>\n                            <input type=\"password\" id=\"if-password\" name=\"if-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Horizontal</strong>Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"hf-email\">Email</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n                                <span class=\"help-block\">Please enter your email</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 form-control-label\" for=\"hf-password\">Password</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n                                <span class=\"help-block\">Please enter your password</span>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Normal</strong>Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\">\n                        <div class=\"form-group\">\n                            <label for=\"nf-email\">Email</label>\n                            <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n                            <span class=\"help-block\">Please enter your email</span>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"nf-password\">Password</label>\n                            <input type=\"password\" id=\"nf-password\" name=\"nf-password\" class=\"form-control\" placeholder=\"Enter Password..\">\n                            <span class=\"help-block\">Please enter your password</span>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Input\n                    <strong>Grid</strong>\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-3\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-3\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-4\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-4\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-5\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-5\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-6\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-7\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-7\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-8\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-8\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-9\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-9\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-10\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-11\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-11\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-12\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-12\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-user\"></i> Login</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Input\n                    <strong>Sizes</strong>\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-3 form-control-label\" for=\"input-small\">Small Input</label>\n                            <div class=\"col-sm-6\">\n                                <input type=\"text\" id=\"input-small\" name=\"input-small\" class=\"form-control input-sm\" placeholder=\".input-sm\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-3 form-control-label\" for=\"input-normal\">Normal Input</label>\n                            <div class=\"col-sm-6\">\n                                <input type=\"text\" id=\"input-normal\" name=\"input-normal\" class=\"form-control\" placeholder=\"Normal\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-3 form-control-label\" for=\"input-large\">Large Input</label>\n                            <div class=\"col-sm-6\">\n                                <input type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control input-lg\" placeholder=\".input-lg\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Validation states</strong>Form\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"form-group has-success\">\n                        <label class=\"form-form-control-label\" for=\"inputSuccess1\">Input with success</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputSuccess1\">\n                    </div>\n                    <div class=\"form-group has-warning\">\n                        <label class=\"form-form-control-label\" for=\"inputWarning1\">Input with warning</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputWarning1\">\n                    </div>\n                    <div class=\"form-group has-danger\">\n                        <label class=\"form-form-control-label\" for=\"inputError1\">Input with error</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputError1\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Validation states</strong>with optional icons\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"form-group has-success\">\n                        <label class=\"form-form-control-label\" for=\"inputSuccess2\">Input with success</label>\n                        <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess2\">\n                    </div>\n                    <div class=\"form-group has-warning\">\n                        <label class=\"form-form-control-label\" for=\"inputWarning2\">Input with warning</label>\n                        <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning2\">\n                    </div>\n                    <div class=\"form-group has-danger has-feedback\">\n                        <label class=\"form-form-control-label\" for=\"inputError2\">Input with error</label>\n                        <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError2\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Icon/Text</strong>Groups\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i>\n                                    </span>\n                                    <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Username\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <input type=\"email\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Email\">\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o\"></i>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-euro\"></i>\n                                    </span>\n                                    <input type=\"text\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"..\">\n                                    <span class=\"input-group-addon\">.00</span>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Buttons</strong>Groups\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\n                                    </span>\n                                    <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Username\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <input type=\"email\" id=\"input2-group2\" name=\"input2-group2\" class=\"form-control\" placeholder=\"Email\">\n                                    <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-facebook\"></i>\n                                        </button>\n                                    </span>\n                                    <input type=\"text\" id=\"input3-group2\" name=\"input3-group2\" class=\"form-control\" placeholder=\"Search\">\n                                    <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-twitter\"></i>\n                                        </button>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Dropdowns</strong>Groups\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">Action\n                                            <span class=\"caret\"></span>\n                                        </button>\n                                        <ul class=\"dropdown-menu\">\n                                            <li><a href=\"javascript:void(0)\">Action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Another action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Something else here</a>\n                                            </li>\n                                            <li class=\"divider\"></li>\n                                            <li><a href=\"javascript:void(0)\">Separated link</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <input type=\"text\" id=\"input1-group3\" name=\"input1-group3\" class=\"form-control\" placeholder=\"Username\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <input type=\"email\" id=\"input2-group3\" name=\"input2-group3\" class=\"form-control\" placeholder=\"Email\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">Action\n                                            <span class=\"caret\"></span>\n                                        </button>\n                                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                                            <li><a href=\"javascript:void(0)\">Action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Another action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Something else here</a>\n                                            </li>\n                                            <li class=\"divider\"></li>\n                                            <li><a href=\"javascript:void(0)\">Separated link</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary\">Action</button>\n                                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <span class=\"caret\"></span>\n                                        </button>\n                                        <ul class=\"dropdown-menu\">\n                                            <li><a href=\"javascript:void(0)\">Action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Another action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Something else here</a>\n                                            </li>\n                                            <li class=\"divider\"></li>\n                                            <li><a href=\"javascript:void(0)\">Separated link</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <input type=\"text\" id=\"input3-group3\" name=\"input3-group3\" class=\"form-control\" placeholder=\"..\">\n                                    <div class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <span class=\"caret\"></span>\n                                        </button>\n                                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                                            <li><a href=\"javascript:void(0)\">Action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Another action</a>\n                                            </li>\n                                            <li><a href=\"javascript:void(0)\">Something else here</a>\n                                            </li>\n                                            <li class=\"divider\"></li>\n                                            <li><a href=\"javascript:void(0)\">Separated link</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                    <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Use the grid for big devices!\n                    <small>\n                        <code>.col-lg-*</code>\n                        <code>.col-md-*</code>\n                        <code>.col-sm-*</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-8\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n                            </div>\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-7\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n                            </div>\n                            <div class=\"col-md-5\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-5\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n                            </div>\n                            <div class=\"col-md-7\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-4\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n                            </div>\n                            <div class=\"col-md-8\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Input Grid for small devices!\n                    <small>\n                        <code>.col-*</code>\n                    </small>\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\" class=\"form-horizontal \">\n                        <div class=\"form-group row\">\n                            <div class=\"col-4\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n                            </div>\n                            <div class=\"col-8\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-5\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n                            </div>\n                            <div class=\"col-7\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-7\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n                            </div>\n                            <div class=\"col-6\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-7\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n                            </div>\n                            <div class=\"col-5\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-8\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n                            </div>\n                            <div class=\"col-4\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Example Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Username</span>\n                                <input type=\"text\" id=\"username3\" name=\"username3\" class=\"form-control\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Email</span>\n                                <input type=\"email\" id=\"email3\" name=\"email3\" class=\"form-control\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Password</span>\n                                <input type=\"password\" id=\"password3\" name=\"password3\" class=\"form-control\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group form-actions\">\n                            <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Example Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" id=\"username2\" name=\"username2\" class=\"form-control\" placeholder=\"Username\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input type=\"email\" id=\"email2\" name=\"email2\" class=\"form-control\" placeholder=\"Email\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Password\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group form-actions\">\n                            <button type=\"submit\" class=\"btn btn-sm btn-default\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Example Form\n                </div>\n                <div class=\"card-block\">\n                    <form action=\"\" method=\"post\">\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i>\n                                </span>\n                                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i>\n                                </span>\n                                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i>\n                                </span>\n                                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n                            </div>\n                        </div>\n                        <div class=\"form-group form-actions\">\n                            <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-edit\"></i>Form Elements\n                    <div class=\"card-actions\">\n                        <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                        <a href=\"#\" class=\"btn-minimize\"><i class=\"icon-arrow-up\"></i></a>\n                        <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                    </div>\n                </div>\n                <div class=\"card-block\">\n                    <form class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"prependedInput\">Prepended text</label>\n                            <div class=\"controls\">\n                                <div class=\"input-prepend input-group\">\n                                    <span class=\"input-group-addon\">@</span>\n                                    <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                                </div>\n                                <p class=\"help-block\">Here's some help text</p>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"appendedInput\">Appended text</label>\n                            <div class=\"controls\">\n                                <div class=\"input-group\">\n                                    <input id=\"appendedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                                    <span class=\"input-group-addon\">.00</span>\n                                </div>\n                                <span class=\"help-block\">Here's more help text</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"appendedPrependedInput\">Append and prepend</label>\n                            <div class=\"controls\">\n                                <div class=\"input-prepend input-group\">\n                                    <span class=\"input-group-addon\">$</span>\n                                    <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                                    <span class=\"input-group-addon\">.00</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"appendedInputButton\">Append with button</label>\n                            <div class=\"controls\">\n                                <div class=\"input-group\">\n                                    <input id=\"appendedInputButton\" class=\"form-control\" size=\"16\" type=\"text\">\n                                    <span class=\"input-group-btn\">\n                                        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-control-label\" for=\"appendedInputButtons\">Two-button append</label>\n                            <div class=\"controls\">\n                                <div class=\"input-group\">\n                                    <input id=\"appendedInputButtons\" size=\"16\" class=\"form-control\" type=\"text\">\n                                    <span class=\"input-group-btn\">\n                                        <button class=\"btn btn-default\" type=\"button\">Search</button>\n                                        <button class=\"btn btn-default\" type=\"button\">Options</button>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n                            <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 558:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\n                </div>\n                <div class=\"card-block\">\n                    <!-- Button trigger modal -->\n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n                        Launch demo modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\n                        Launch large modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n                        Launch small modal\n                    </button>\n                    <hr>\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\n                        Primary modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" (click)=\"successModal.show()\">\n                        Success modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\n                        Warning modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\n                        Danger modal\n                    </button>\n                    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n                        Info modal\n                    </button>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-primary\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-success\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-warning\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-danger\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Modal title</h4>\n                <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n";

/***/ },

/***/ 559:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Social Media Button</strong>\n                    <small>Usage ex.</small>\n                    <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-facebook\" type=\"button\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n                    <div class=\"card-actions\">\n                        <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                        <button class=\"btn-minimize\" type=\"button\" data-toggle=\"collapse\" data-target=\"\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                            <i class=\"icon-arrow-up\"></i>\n                        </button>\n                        <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                    </div>\n                </div>\n                <div class=\"card-block\">\n                    <h6>Size Small\n                        <small>Add this class\n                            <code>.btn-sm</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-facebook\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-twitter\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-linkedin\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-flickr\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-tumblr\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-xing\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-github\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-html5\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-openid\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-stack-overflow\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-css3\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-youtube\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dribbble\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-google-plus\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-instagram\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-pinterest\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vk\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-yahoo\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-behance\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dropbox\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-reddit\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-spotify\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vine\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-foursquare\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vimeo\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Normal</h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-facebook\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-twitter\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-linkedin\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-flickr\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-tumblr\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-xing\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-github\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-html5\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-openid\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-stack-overflow\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-css3\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-youtube\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dribbble\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-google-plus\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-instagram\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-pinterest\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vk\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-yahoo\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-behance\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dropbox\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-reddit\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-spotify\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vine\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-foursquare\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vimeo\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Large\n                        <small>Add this class\n                            <code>.btn-lg</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-facebook\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-twitter\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-linkedin\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-flickr\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-tumblr\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-xing\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-github\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-html5\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-openid\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-stack-overflow\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-css3\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-youtube\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dribbble\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-google-plus\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-instagram\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-pinterest\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vk\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-yahoo\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-behance\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dropbox\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-reddit\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-spotify\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vine\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-foursquare\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vimeo\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Social Media Button</strong>\n                    <small>Only icons. Usage ex.</small>\n                    <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-facebook icon\" type=\"button\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n                    <div class=\"card-actions\">\n                        <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                        <button class=\"btn-minimize\" type=\"button\" data-toggle=\"collapse\" data-target=\"\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                            <i class=\"icon-arrow-up\"></i>\n                        </button>\n                        <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                    </div>\n                </div>\n                <div class=\"card-block\">\n                    <h6>Size Small\n                        <small>Add this class\n                            <code>.btn-sm</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-facebook icon\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-twitter icon\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-linkedin icon\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-flickr icon\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-tumblr icon\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-xing icon\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-github icon\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-html5 icon\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-openid icon\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-stack-overflow icon\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-css3 icon\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-youtube icon\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dribbble icon\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-google-plus icon\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-instagram icon\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-pinterest icon\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vk icon\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-yahoo icon\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-behance icon\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dropbox icon\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-reddit icon\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-spotify icon\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vine icon\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-foursquare icon\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vimeo icon\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Normal</h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-facebook icon\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-twitter icon\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-linkedin icon\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-flickr icon\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-tumblr icon\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-xing icon\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-github icon\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-html5 icon\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-openid icon\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-stack-overflow icon\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-css3 icon\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-youtube icon\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dribbble icon\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-google-plus icon\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-instagram icon\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-pinterest icon\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vk icon\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-yahoo icon\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-behance icon\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dropbox icon\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-reddit icon\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-spotify icon\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vine icon\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-foursquare icon\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vimeo icon\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Large\n                        <small>Add this class\n                            <code>.btn-lg</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-facebook icon\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-twitter icon\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-linkedin icon\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-flickr icon\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-tumblr icon\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-xing icon\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-github icon\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-html5 icon\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-openid icon\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-stack-overflow icon\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-css3 icon\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-youtube icon\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dribbble icon\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-google-plus icon\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-instagram icon\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-pinterest icon\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vk icon\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-yahoo icon\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-behance icon\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dropbox icon\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-reddit icon\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-spotify icon\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vine icon\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-foursquare icon\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vimeo icon\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Social Media Button</strong>\n                    <small>Only text. Usage ex.</small>\n                    <code style=\"text-transform:lowercase\">&lt;button class=\"btn btn-facebook text\" type=\"button\"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/button&gt;</code>\n                    <div class=\"card-actions\">\n                        <a href=\"#\" class=\"btn-setting\"><i class=\"icon-settings\"></i></a>\n                        <button class=\"btn-minimize\" type=\"button\" data-toggle=\"collapse\" data-target=\"\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                            <i class=\"icon-arrow-up\"></i>\n                        </button>\n                        <a href=\"#\" class=\"btn-close\"><i class=\"icon-close\"></i></a>\n                    </div>\n                </div>\n                <div class=\"card-block\">\n                    <h6>Size Small\n                        <small>Add this class\n                            <code>.btn-sm</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-facebook text\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-twitter text\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-linkedin text\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-flickr text\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-tumblr text\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-xing text\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-github text\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-html5 text\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-openid text\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-stack-overflow text\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-css3 text\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-youtube text\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dribbble text\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-google-plus text\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-instagram text\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-pinterest text\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vk text\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-yahoo text\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-behance text\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-dropbox text\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-reddit text\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-spotify text\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vine text\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-foursquare text\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-sm btn-vimeo text\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Normal</h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-facebook text\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-twitter text\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-linkedin text\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-flickr text\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-tumblr text\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-xing text\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-github text\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-html5 text\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-openid text\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-stack-overflow text\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-css3 text\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-youtube text\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dribbble text\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-google-plus text\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-instagram text\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-pinterest text\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vk text\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-yahoo text\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-behance text\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-dropbox text\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-reddit text\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-spotify text\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vine text\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-foursquare text\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-vimeo text\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                    <h6>Size Large\n                        <small>Add this class\n                            <code>.btn-lg</code>\n                        </small>\n                    </h6>\n                    <p>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-facebook text\" type=\"button\">\n                            <span>Facebook</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-twitter text\" type=\"button\">\n                            <span>Twitter</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-linkedin text\" type=\"button\">\n                            <span>LinkedIn</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-flickr text\" type=\"button\">\n                            <span>Flickr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-tumblr text\" type=\"button\">\n                            <span>Tumblr</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-xing text\" type=\"button\">\n                            <span>Xing</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-github text\" type=\"button\">\n                            <span>Github</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-html5 text\" type=\"button\">\n                            <span>HTML5</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-openid text\" type=\"button\">\n                            <span>OpenID</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-stack-overflow text\" type=\"button\">\n                            <span>StackOverflow</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-css3 text\" type=\"button\">\n                            <span>CSS3</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-youtube text\" type=\"button\">\n                            <span>YouTube</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dribbble text\" type=\"button\">\n                            <span>Dribbble</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-google-plus text\" type=\"button\">\n                            <span>Google+</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-instagram text\" type=\"button\">\n                            <span>Instagram</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-pinterest text\" type=\"button\">\n                            <span>Pinterest</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vk text\" type=\"button\">\n                            <span>VK</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-yahoo text\" type=\"button\">\n                            <span>Yahoo</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-behance text\" type=\"button\">\n                            <span>Behance</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-dropbox text\" type=\"button\">\n                            <span>Dropbox</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-reddit text\" type=\"button\">\n                            <span>Reddit</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-spotify text\" type=\"button\">\n                            <span>Spotify</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vine text\" type=\"button\">\n                            <span>Vine</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-foursquare text\" type=\"button\">\n                            <span>Forsquare</span>\n                        </button>\n                        <button style=\"margin-bottom: 4px\" class=\"btn btn-lg btn-vimeo text\" type=\"button\">\n                            <span>Vimeo</span>\n                        </button>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 560:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    3d Switch\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-3d switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-3d switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-3d switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-3d switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-3d switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-3d switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch default\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch default - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-pill switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch outline\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch outline - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-pill switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch outline alternative\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch outline alternative - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-default switch-pill switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-pill switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text outline\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text outline - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-pill switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text outline alternative\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with text outline alternative - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-text switch-pill switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-text switch-pill switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-pill switch-primary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-secondary\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-success\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-warning\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-info\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-danger\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon outline\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon outline - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-pill switch-primary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-secondary-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-success-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-warning-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-info-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-danger-outline\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon outline alternative\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Switch with icon outline alternative - pills\n                </div>\n                <div class=\"card-block\">\n                    <label class=\"switch switch-icon switch-pill switch-primary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-secondary-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-success-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-warning-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-info-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                    &nbsp;&nbsp;&nbsp;\n                    <label class=\"switch switch-icon switch-pill switch-danger-outline-alt\">\n                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                        <span class=\"switch-label\" data-on=\"#xf00c\" data-off=\"#xf00d\"></span>\n                        <span class=\"switch-handle\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Sizes\n                </div>\n                <div class=\"card-block p-0\">\n                    <table class=\"table table-hover table-striped table-align-middle mb-0\">\n                        <thead>\n                            <th>Size</th>\n                            <th>Example</th>\n                            <th>CSS Class</th>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    Large\n                                </td>\n                                <td>\n                                    <label class=\"switch switch-lg switch-3d switch-primary\">\n                                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                                        <span class=\"switch-label\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </td>\n                                <td>\n                                    Add following class\n                                    <code>.switch-lg</code>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Normal\n                                </td>\n                                <td>\n                                    <label class=\"switch switch-3d switch-primary\">\n                                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                                        <span class=\"switch-label\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </td>\n                                <td>\n                                    -\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Small\n                                </td>\n                                <td>\n                                    <label class=\"switch switch-sm switch-3d switch-primary\">\n                                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                                        <span class=\"switch-label\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </td>\n                                <td>\n                                    Add following class\n                                    <code>.switch-sm</code>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Extra small\n                                </td>\n                                <td>\n                                    <label class=\"switch switch-xs switch-3d switch-primary\">\n                                        <input type=\"checkbox\" class=\"switch-input\" checked>\n                                        <span class=\"switch-label\"></span>\n                                        <span class=\"switch-handle\"></span>\n                                    </label>\n                                </td>\n                                <td>\n                                    Add following class\n                                    <code>.switch-sm</code>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 561:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Simple Table\n                </div>\n                <div class=\"card-block\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Username</th>\n                                <th>Date registered</th>\n                                <th>Role</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Samppa Nori</td>\n                                <td>2012/01/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Estavan Lykos</td>\n                                <td>2012/02/01</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-danger\">Banned</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Chetan Mohamed</td>\n                                <td>2012/02/01</td>\n                                <td>Admin</td>\n                                <td>\n                                    <span class=\"badge badge-default\">Inactive</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Derick Maximinus</td>\n                                <td>2012/03/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">Pending</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Friderik Dávid</td>\n                                <td>2012/01/21</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                        </li>\n                        <li class=\"page-item active\">\n                            <a class=\"page-link\" href=\"#\">1</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Striped Table\n                </div>\n                <div class=\"card-block\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Username</th>\n                                <th>Date registered</th>\n                                <th>Role</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Yiorgos Avraamu</td>\n                                <td>2012/01/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Avram Tarasios</td>\n                                <td>2012/02/01</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-danger\">Banned</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Quintin Ed</td>\n                                <td>2012/02/01</td>\n                                <td>Admin</td>\n                                <td>\n                                    <span class=\"badge badge-default\">Inactive</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Enéas Kwadwo</td>\n                                <td>2012/03/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">Pending</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Agapetus Tadeáš</td>\n                                <td>2012/01/21</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                        </li>\n                        <li class=\"page-item active\">\n                            <a class=\"page-link\" href=\"#\">1</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Condensed Table\n                </div>\n                <div class=\"card-block\">\n                    <table class=\"table table-condensed\">\n                        <thead>\n                            <tr>\n                                <th>Username</th>\n                                <th>Date registered</th>\n                                <th>Role</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Carwyn Fachtna</td>\n                                <td>2012/01/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Nehemiah Tatius</td>\n                                <td>2012/02/01</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-danger\">Banned</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Ebbe Gemariah</td>\n                                <td>2012/02/01</td>\n                                <td>Admin</td>\n                                <td>\n                                    <span class=\"badge badge-default\">Inactive</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Eustorgios Amulius</td>\n                                <td>2012/03/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">Pending</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Leopold Gáspár</td>\n                                <td>2012/01/21</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                        </li>\n                        <li class=\"page-item active\">\n                            <a class=\"page-link\" href=\"#\">1</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Bordered Table\n                </div>\n                <div class=\"card-block\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>Username</th>\n                                <th>Date registered</th>\n                                <th>Role</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Pompeius René</td>\n                                <td>2012/01/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Paĉjo Jadon</td>\n                                <td>2012/02/01</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-danger\">Banned</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Micheal Mercurius</td>\n                                <td>2012/02/01</td>\n                                <td>Admin</td>\n                                <td>\n                                    <span class=\"badge badge-default\">Inactive</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Ganesha Dubhghall</td>\n                                <td>2012/03/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">Pending</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Hiroto Šimun</td>\n                                <td>2012/01/21</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                        </li>\n                        <li class=\"page-item active\">\n                            <a class=\"page-link\" href=\"#\">1</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-align-justify\"></i> Combined All Table\n                </div>\n                <div class=\"card-block\">\n                    <table class=\"table table-bordered table-striped table-condensed\">\n                        <thead>\n                            <tr>\n                                <th>Username</th>\n                                <th>Date registered</th>\n                                <th>Role</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Vishnu Serghei</td>\n                                <td>2012/01/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Zbyněk Phoibos</td>\n                                <td>2012/02/01</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-danger\">Banned</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Einar Randall</td>\n                                <td>2012/02/01</td>\n                                <td>Admin</td>\n                                <td>\n                                    <span class=\"badge badge-default\">Inactive</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Félix Troels</td>\n                                <td>2012/03/01</td>\n                                <td>Member</td>\n                                <td>\n                                    <span class=\"badge badge-warning\">Pending</span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Aulus Agmundr</td>\n                                <td>2012/01/21</td>\n                                <td>Staff</td>\n                                <td>\n                                    <span class=\"badge badge-success\">Active</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <nav>\n                        <ul class=\"pagination\">\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a>\n                            </li>\n                            <li class=\"page-item active\">\n                                <a class=\"page-link\" href=\"#\">1</a>\n                            </li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a>\n                            </li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a>\n                            </li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a>\n                            </li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 562:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-6 mb-2\">\n            <!-- Nav tabs -->\n            <tabset>\n                <tab heading=\"Home\">\n                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab heading=\"Profile\">\n                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab heading=\"Messages\">\n                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n            </tabset>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6 mb-2\">\n            <!-- Nav tabs -->\n            <tabset>\n                <tab>\n                    <template tabHeading><i class=\"icon-calculator\"></i>\n                    </template>\n                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-basket-loaded\"></i>\n                    </template>\n                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-pie-chart\"></i>\n                    </template>\n                    4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n            </tabset>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6 mb-2\">\n            <!-- Nav tabs -->\n            <tabset>\n                <tab>\n                    <template tabHeading><i class=\"icon-calculator\"></i> Calculator</template>\n                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</template>\n                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-pie-chart\"></i> Charts</template>\n                    4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n            </tabset>\n        </div>\n        <!--/.col-->\n        <div class=\"col-md-6 mb-2\">\n            <!-- Nav tabs -->\n            <tabset>\n                <tab>\n                    <template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;\n                        <span class=\"badge badge-success\">New</span>\n                    </template>\n                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;\n                        <span class=\"badge badge-pill badge-danger\">29</span>\n                    </template>\n                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n                <tab>\n                    <template tabHeading><i class=\"icon-pie-chart\"></i> Charts</template>\n                    4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </tab>\n            </tabset>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n";

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__(327);
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__(329);
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_backdrop_component__ = __webpack_require__(225);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ModalBackdropComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_backdrop_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ModalBackdropOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_backdrop_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ModalDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__modal_component__["ModalDirective"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_module__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ModalModule", function() { return __WEBPACK_IMPORTED_MODULE_2__modal_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__(588);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModalModule; });





var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning__["a" /* PositioningService */]] };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["ModalDirective"]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["ModalDirective"]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());
//# sourceMappingURL=modal.module.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PositioningService; });


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
//# sourceMappingURL=positioning.service.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__(596);
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ exports["a"] = listenToTriggers;

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Utils; });

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
//# sourceMappingURL=utils.class.js.map

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var buttons_component_1 = __webpack_require__(249);
var cards_component_1 = __webpack_require__(250);
var forms_component_1 = __webpack_require__(251);
var social_buttons_component_1 = __webpack_require__(253);
var switches_component_1 = __webpack_require__(254);
var tables_component_1 = __webpack_require__(255);
// Modal Component
var modal_1 = __webpack_require__(591);
var modals_component_1 = __webpack_require__(252);
// Tabs Component
var tabs_1 = __webpack_require__(33);
var tabs_component_1 = __webpack_require__(256);
// Components Routing
var components_routing_module_1 = __webpack_require__(426);
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            components_routing_module_1.ComponentsRoutingModule,
            modal_1.ModalModule.forRoot(),
            tabs_1.TabsModule
        ],
        declarations: [
            buttons_component_1.ButtonsComponent,
            cards_component_1.CardsComponent,
            forms_component_1.FormsComponent,
            modals_component_1.ModalsComponent,
            social_buttons_component_1.SocialButtonsComponent,
            switches_component_1.SwitchesComponent,
            tables_component_1.TablesComponent,
            tabs_component_1.TabsComponent
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;


/***/ }

});
//# sourceMappingURL=1.js.map