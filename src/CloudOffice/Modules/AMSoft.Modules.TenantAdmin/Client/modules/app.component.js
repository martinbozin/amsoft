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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(translate, titleService) {
        this.translate = translate;
        this.titleService = titleService;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('TITLE')
            .subscribe(function (title) { return _this.setTitle(title); });
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'appc-app',
        styleUrls: ['./app.component.scss'],
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService, platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map