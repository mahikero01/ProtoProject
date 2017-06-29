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
var resource_service_1 = require("../../services/resource.service");
var TeamServicesComponent = (function () {
    function TeamServicesComponent(resourceService) {
        this.resourceService = resourceService;
        this.slides = [];
        this.breadcrumbs = ['Team Overview', 'Team Information', 'Services'];
    }
    TeamServicesComponent.prototype.getSlides = function () {
        var _this = this;
        this.slides = [];
        // this.resourceService.getResourcePath('Team Services')
        this.resourceService.getResourcePath2('Team Services')
            .then(function (res) {
            _this.slides.push({
                image: res.ResourcePath
            });
        })
            .catch(function (err) { console.log(err); });
    };
    TeamServicesComponent.prototype.ngOnInit = function () {
        this.getSlides();
    };
    return TeamServicesComponent;
}());
TeamServicesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "team-services.component.html"
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], TeamServicesComponent);
exports.TeamServicesComponent = TeamServicesComponent;
