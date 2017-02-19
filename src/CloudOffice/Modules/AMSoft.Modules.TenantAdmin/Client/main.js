"use strict";
require("reflect-metadata");
require("zone.js");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./modules/app.module");
// Enable either Hot Module Reloading or production mode
/* tslint:disable */
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(function () { });
}
else {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map