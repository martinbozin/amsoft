"use strict";
var RegisterModel = (function () {
    function RegisterModel(username, password, email, firstname, lastname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return RegisterModel;
}());
exports.RegisterModel = RegisterModel;
//# sourceMappingURL=register.model.js.map