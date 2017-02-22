"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var compose_component_1 = require("./compose.component");
var inbox_component_1 = require("./inbox.component");
var message_component_1 = require("./message.component");
var routes = [
    {
        path: '',
        data: {
            title: 'Email App'
        },
        children: [
            {
                path: 'compose',
                component: compose_component_1.ComposeComponent,
                data: {
                    title: 'Compose'
                }
            },
            {
                path: 'inbox',
                component: inbox_component_1.InboxComponent,
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'message',
                component: message_component_1.MessageComponent,
                data: {
                    title: 'Message'
                }
            }
        ]
    }
];
var EmailRoutingModule = (function () {
    function EmailRoutingModule() {
    }
    return EmailRoutingModule;
}());
EmailRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], EmailRoutingModule);
exports.EmailRoutingModule = EmailRoutingModule;
//# sourceMappingURL=email-routing.module.js.map