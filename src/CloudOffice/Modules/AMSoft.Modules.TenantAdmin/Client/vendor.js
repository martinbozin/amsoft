// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
"use strict";
// Angular 2
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");
// import 3rd party libs
require("bootstrap");
require("ng2-translate");
require("@ng-bootstrap/ng-bootstrap");
// RxJS
require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/observable/throw");
//# sourceMappingURL=vendor.js.map