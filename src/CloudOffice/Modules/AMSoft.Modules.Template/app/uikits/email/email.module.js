"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Email
var compose_component_1 = require("./compose.component");
var inbox_component_1 = require("./inbox.component");
var message_component_1 = require("./message.component");
// Routing
var email_routing_module_1 = require("./email-routing.module");
var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    core_1.NgModule({
        imports: [
            email_routing_module_1.EmailRoutingModule,
            common_1.CommonModule,
        ],
        declarations: [
            compose_component_1.ComposeComponent,
            inbox_component_1.InboxComponent,
            message_component_1.MessageComponent
        ]
    })
], EmailModule);
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map