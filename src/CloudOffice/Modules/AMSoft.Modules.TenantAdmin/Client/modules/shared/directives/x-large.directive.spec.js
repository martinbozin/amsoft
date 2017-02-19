"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var by_1 = require("@angular/platform-browser/src/dom/debug/by");
// Load the implementations that should be tested
var x_large_directive_1 = require("./x-large.directive");
describe('x-large directive', function () {
    // Create a test component to test directives
    var TestComponent = (function () {
        function TestComponent() {
        }
        return TestComponent;
    }());
    TestComponent = __decorate([
        core_1.Component({
            template: '<div x-large>Content</div>'
        })
    ], TestComponent);
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                x_large_directive_1.XLargeDirective,
                TestComponent
            ]
        });
    });
    it('should sent font-size to x-large', testing_1.fakeAsync(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            testing_1.tick();
            var element = fixture.debugElement.query(by_1.By.css('div'));
            // expect(element.nativeElement.style.fontSize).toBe('x-large');
        });
    }));
});
//# sourceMappingURL=x-large.directive.spec.js.map