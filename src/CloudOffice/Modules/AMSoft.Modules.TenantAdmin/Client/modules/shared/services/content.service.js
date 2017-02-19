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
var data_service_1 = require("./data.service");
var ContentService = (function () {
    function ContentService(dataService) {
        this.dataService = dataService;
    }
    ContentService.prototype.get = function (lang) {
        return this.dataService.get('api/content?lang=' + (lang || 'en'));
    };
    return ContentService;
}());
ContentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map