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
var auth_1 = require("./entities/auth");
var AuthUserComponent = (function () {
    function AuthUserComponent(router) {
        this.router = router;
        this.activeLink = 0;
        this.routeWOUserName('mission-vision');
    }
    AuthUserComponent.prototype.routeWithUserName = function (path) {
        this.router.navigate(['/' + path, this.user.userName]);
    };
    AuthUserComponent.prototype.routeWOUserName = function (path) {
        this.router.navigate(['/' + path]);
    };
    AuthUserComponent.prototype.routeWithID = function (path, id) {
        this.router.navigate(['/' + path, id]);
    };
    return AuthUserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", auth_1.Auth)
], AuthUserComponent.prototype, "user", void 0);
AuthUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'auth-user',
        templateUrl: 'auth-user.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AuthUserComponent);
exports.AuthUserComponent = AuthUserComponent;
