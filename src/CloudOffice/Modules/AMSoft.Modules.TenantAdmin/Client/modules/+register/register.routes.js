"use strict";
var router_1 = require("@angular/router");
var register_component_1 = require("./+register/register.component");
var register_confirmation_component_1 = require("./+confirmation/register-confirmation.component");
var routes = [
    { path: '', redirectTo: 'registerhome', pathMatch: 'full' },
    { path: 'registerhome', component: register_component_1.RegisterComponent },
    { path: 'registerconfirmation', component: register_confirmation_component_1.RegisterConfirmationComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=register.routes.js.map