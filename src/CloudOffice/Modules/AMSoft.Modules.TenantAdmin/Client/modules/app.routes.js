"use strict";
var router_1 = require("@angular/router");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Lazy async modules
    {
        path: 'login', loadChildren: './+login/login.module#LoginModule'
    },
    {
        path: 'register', loadChildren: './+register/register.module#RegisterModule'
    },
    {
        path: 'profile', loadChildren: './+profile/profile.module#ProfileModule'
    },
    {
        path: 'admin', loadChildren: './+admin/admin.module#AdminModule'
    },
    {
        path: 'examples', loadChildren: './+examples/examples.module#ExamplesModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map