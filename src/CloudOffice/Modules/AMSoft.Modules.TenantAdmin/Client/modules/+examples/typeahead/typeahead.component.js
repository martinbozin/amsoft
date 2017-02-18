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
var Rx_1 = require("rxjs/Rx");
var wikipedia_service_1 = require("./wikipedia.service");
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
        templateUrl: './typeahead.component.html',
        styleUrls: ['./typeahead.component.scss']
    }),
    __metadata("design:paramtypes", [wikipedia_service_1.WikipediaService])
], TypeaheadComponent);
exports.TypeaheadComponent = TypeaheadComponent;
//# sourceMappingURL=typeahead.component.js.map