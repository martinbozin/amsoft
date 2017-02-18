"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var control_base_1 = require("./control-base");
var ControlCheckbox = (function (_super) {
    __extends(ControlCheckbox, _super);
    function ControlCheckbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = 'checkbox';
        _this.value = options.value || false;
        return _this;
    }
    return ControlCheckbox;
}(control_base_1.ControlBase));
exports.ControlCheckbox = ControlCheckbox;
//# sourceMappingURL=control-checkbox.js.map