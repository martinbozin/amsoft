"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { User } from '../models/user.model';
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    //logout() {
    //    sessionStorage.clear();
    //    this.router.navigate(['/login']);
    //}
    //isLoggedIn(): boolean {
    //    return this.user(undefined) !== undefined;
    //}
    //user(user: User): User {
    //    if (user) {
    //        sessionStorage.setItem('user', JSON.stringify(user));
    //    }
    //    let userData = JSON.parse(sessionStorage.getItem('user'));
    //    if (userData) {
    //        user = new User(userData.displayName, userData.roles);
    //    }
    //    return user ? user : undefined;
    //}
    AuthService.prototype.setAuth = function (res) {
        if (res && res.user) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map