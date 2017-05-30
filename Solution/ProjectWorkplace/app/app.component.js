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
var auth_service_1 = require("./services/auth.service");
var auth_1 = require("./entities/auth");
var AppComponent = (function () {
    function AppComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.auth = new auth_1.Auth(false, '', '');
        this.viewPage = 0;
        this.authService.getAuthorization()
            .then(function (auth) {
            _this.auth = auth;
        });
    }
    AppComponent.prototype.changeView = function () {
        if (this.auth.isAuthenticated)
            this.viewPage = 1;
        else
            this.viewPage = 2;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
