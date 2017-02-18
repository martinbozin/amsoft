"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var control_base_1 = require("./control-base");
var ControlDropdown = (function (_super) {
    __extends(ControlDropdown, _super);
    function ControlDropdown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.options = [];
        _this.type = 'dropdown';
        _this.options = options.options || [];
        return _this;
    }
    return ControlDropdown;
}(control_base_1.ControlBase));
exports.ControlDropdown = ControlDropdown;
//# sourceMappingURL=control-dropdown.js.map