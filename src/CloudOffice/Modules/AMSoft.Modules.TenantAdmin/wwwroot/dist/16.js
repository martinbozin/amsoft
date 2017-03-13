webpackJsonp([16],{

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(576)
    })
], InvoiceComponent);
exports.InvoiceComponent = InvoiceComponent;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(12);
var invoice_component_1 = __webpack_require__(273);
var routes = [
    {
        path: 'invoice',
        component: invoice_component_1.InvoiceComponent,
        data: {
            title: 'Invoice'
        }
    }
];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    return InvoiceRoutingModule;
}());
InvoiceRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], InvoiceRoutingModule);
exports.InvoiceRoutingModule = InvoiceRoutingModule;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
// Invoice
var invoice_component_1 = __webpack_require__(273);
//Routing
var invoice_routing_module_1 = __webpack_require__(447);
//
var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    core_1.NgModule({
        imports: [
            invoice_routing_module_1.InvoiceRoutingModule,
            common_1.CommonModule,
        ],
        declarations: [
            invoice_component_1.InvoiceComponent
        ]
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;


/***/ },

/***/ 576:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Invoice\r\n        <strong>#90-98792</strong>\r\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\" onclick=\"javascript:window.print();\"><i class=\"fa fa-print\"></i> Print</a>\r\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\"><i class=\"fa fa-save\"></i> Save</a>\r\n    </div>\r\n    <div class=\"card-block\">\r\n        <div class=\"row mb-2\">\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-1\">From:</h6>\r\n                <div>\r\n                    <strong>BootstrapMaster.com</strong>\r\n                </div>\r\n                <div>Konopnickiej 42</div>\r\n                <div>43-190 Mikolow, Poland</div>\r\n                <div>Email: lukasz@bootstrapmaster.com</div>\r\n                <div>Phone: +48 123 456 789</div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-1\">To:</h6>\r\n                <div>\r\n                    <strong>BootstrapMaster.com</strong>\r\n                </div>\r\n                <div>Konopnickiej 42</div>\r\n                <div>43-190 Mikolow, Poland</div>\r\n                <div>Email: lukasz@bootstrapmaster.com</div>\r\n                <div>Phone: +48 123 456 789</div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-sm-4\">\r\n                <h6 class=\"mb-1\">Details:</h6>\r\n                <div>Invoice\r\n                    <strong>#90-98792</strong>\r\n                </div>\r\n                <div>March 30, 2013</div>\r\n                <div>VAT: PL9877281777</div>\r\n                <div>Account Name: BootstrapMaster.com</div>\r\n                <div>\r\n                    <strong>SWIFT code: 99 8888 7777 6666 5555</strong>\r\n                </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n        </div>\r\n        <!--/.row-->\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"center\">#</th>\r\n                        <th>Item</th>\r\n                        <th>Description</th>\r\n                        <th class=\"center\">Quantity</th>\r\n                        <th class=\"right\">Unit Cost</th>\r\n                        <th class=\"right\">Total</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"left\">Origin License</td>\r\n                        <td class=\"left\">Extended License</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$999,00</td>\r\n                        <td class=\"right\">$999,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">2</td>\r\n                        <td class=\"left\">Custom Services</td>\r\n                        <td class=\"left\">Instalation and Customization (cost per hour)</td>\r\n                        <td class=\"center\">20</td>\r\n                        <td class=\"right\">$150,00</td>\r\n                        <td class=\"right\">$3.000,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">3</td>\r\n                        <td class=\"left\">Hosting</td>\r\n                        <td class=\"left\">1 year subcription</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$499,00</td>\r\n                        <td class=\"right\">$499,00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"center\">4</td>\r\n                        <td class=\"left\">Platinum Support</td>\r\n                        <td class=\"left\">1 year subcription 24/7</td>\r\n                        <td class=\"center\">1</td>\r\n                        <td class=\"right\">$3.999,00</td>\r\n                        <td class=\"right\">$3.999,00</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-4 col-sm-5\">\r\n                <div class=\"well\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\r\n                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                </div>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n            <div class=\"col-lg-4 offset-lg-4 col-sm-5 offset-sm-2\">\r\n                <table class=\"table table-clear\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"left\">\r\n                                <strong>Subtotal</strong>\r\n                            </td>\r\n                            <td class=\"right\">$8.497,00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\">\r\n                                <strong>Discount (20%)</strong>\r\n                            </td>\r\n                            <td class=\"right\">$1,699,40</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\">\r\n                                <strong>VAT (10%)</strong>\r\n                            </td>\r\n                            <td class=\"right\">$679,76</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"left\">\r\n                                <strong>Total</strong>\r\n                            </td>\r\n                            <td class=\"right\">\r\n                                <strong>$7.477,36</strong>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <a href=\"#\" class=\"btn btn-success\"><i class=\"fa fa-usd\"></i> Proceed to Payment</a>\r\n            </div>\r\n            <!--/.col-->\r\n\r\n        </div>\r\n        <!--/.row-->\r\n    </div>\r\n</div>\r\n";

/***/ }

});
//# sourceMappingURL=16.js.map