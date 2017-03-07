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
var core_1 = require("@angular/core");
var content_service_1 = require("./content.service");
var ApiTranslationLoader = (function () {
    function ApiTranslationLoader(cs) {
        this.cs = cs;
    }
    ApiTranslationLoader.prototype.getTranslation = function (lang) {
        return this.cs.get(lang);
    };
    return ApiTranslationLoader;
}());
ApiTranslationLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ApiTranslationLoader);
exports.ApiTranslationLoader = ApiTranslationLoader;
var CustomMissingTranslationHandler = (function () {
    function CustomMissingTranslationHandler() {
    }
    CustomMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return CustomMissingTranslationHandler;
}());
CustomMissingTranslationHandler = __decorate([
    core_1.Injectable()
], CustomMissingTranslationHandler);
exports.CustomMissingTranslationHandler = CustomMissingTranslationHandler;
//# sourceMappingURL=api-translation-loader.service.js.map