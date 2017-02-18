"use strict";
var router_1 = require("@angular/router");
var examples_component_1 = require("./examples.component");
var examples_home_component_1 = require("./examples-home/examples-home.component");
var animation_component_1 = require("./animation/animation.component");
var typeahead_component_1 = require("./typeahead/typeahead.component");
var routes = [
    {
        path: '', component: examples_component_1.ExamplesComponent, children: [
            { path: '', component: examples_home_component_1.ExamplesHomeComponent },
            { path: 'animation', component: animation_component_1.AnimationComponent },
            { path: 'typeahead', component: typeahead_component_1.TypeaheadComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=examples.routes.js.map