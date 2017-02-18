"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var page_heading_directive_1 = require("./directives/page-heading.directive");
var dynamic_form_component_1 = require("./forms/dynamic-form.component");
var dynamic_form_control_component_1 = require("./forms/dynamic-form-control.component");
var error_message_component_1 = require("./forms/error-message.component");
var error_summary_component_1 = require("./forms/error-summary.component");
var form_control_service_1 = require("./forms/form-control.service");
var header_component_1 = require("./layout/header.component");
var footer_component_1 = require("./layout/footer.component");
// Services
var data_service_1 = require("./services/data.service");
var api_gateway_service_1 = require("./services/api-gateway.service");
var auth_service_1 = require("./services/auth.service");
var http_error_handler_service_1 = require("./services/http-error-handler.service");
var api_translation_loader_service_1 = require("./services/api-translation-loader.service");
var content_service_1 = require("./services/content.service");
var utility_service_1 = require("./services/utility.service");
var uppercase_pipe_1 = require("./pipes/uppercase.pipe");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                http_error_handler_service_1.HttpErrorHandlerService,
                api_gateway_service_1.ApiGatewayService,
                auth_service_1.AuthService,
                data_service_1.DataService,
                content_service_1.ContentService,
                form_control_service_1.FormControlService,
                utility_service_1.UtilityService
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            // No need to export as these modules don't expose any components/directive etc'
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_translate_1.TranslateModule.forRoot({ provide: ng2_translate_1.TranslateLoader, useClass: api_translation_loader_service_1.ApiTranslationLoader })
        ],
        declarations: [
            dynamic_form_component_1.DynamicFormComponent,
            dynamic_form_control_component_1.DynamicFormControlComponent,
            error_message_component_1.ErrorMessageComponent,
            error_summary_component_1.ErrorSummaryComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            page_heading_directive_1.PageHeadingComponent,
            uppercase_pipe_1.UppercasePipe
        ],
        exports: [
            // Modules
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule,
            ng2_translate_1.TranslateModule,
            // Providers, Components, directive, pipes
            dynamic_form_component_1.DynamicFormComponent,
            dynamic_form_control_component_1.DynamicFormControlComponent,
            error_summary_component_1.ErrorSummaryComponent,
            error_message_component_1.ErrorMessageComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            page_heading_directive_1.PageHeadingComponent,
            uppercase_pipe_1.UppercasePipe
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map