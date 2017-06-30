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
var ManagerComponent = (function () {
    function ManagerComponent(resourceService) {
        this.resourceService = resourceService;
        this.path = ''; //'resources/workplace/03LEADERS/gk.mp4';
        this.breadcrumbs = ['Leaders\' Video', 'Manager'];
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.resourceService.getResourcePath('Manager')
        //     .then(req=>this.path=req.ResourcePath);
        this.resourceService.getVideo(false).then(function (req) { return _this.path = req.ResourcePath; });
    };
    return ManagerComponent;
}());
ManagerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "generic-vid.component.html"
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ManagerComponent);
exports.ManagerComponent = ManagerComponent;
