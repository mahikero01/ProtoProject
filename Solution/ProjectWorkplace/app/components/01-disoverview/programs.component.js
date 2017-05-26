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
var ProgramsComponent = (function () {
    function ProgramsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.slides = [];
        this.breadcrumbs = ['DIS Overview', 'Programs'];
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        this.getRouteName();
        this.getImage();
    };
    ProgramsComponent.prototype.getImage = function () {
        this.addSlide(this.routeName + '.jpg');
    };
    ProgramsComponent.prototype.getRouteName = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.routeName = params['id'];
            _this.breadcrumbs.push(_this.routeName);
        });
    };
    ProgramsComponent.prototype.addSlide = function (filename) {
        this.slides.push({
            image: "resources/workplace/01DIS OVERVIEW/Programs/" + filename
        });
    };
    return ProgramsComponent;
}());
ProgramsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "strategies.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], ProgramsComponent);
exports.ProgramsComponent = ProgramsComponent;
