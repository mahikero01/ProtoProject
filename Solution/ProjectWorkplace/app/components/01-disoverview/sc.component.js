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
var SCComponent = (function () {
    function SCComponent() {
        this.slides = [];
        this.breadcrumbs = ['DIS Overview', 'Functional Tower'];
        //this.addSlide('04-Functional Tower.jpg');
        this.addSlide('functional towers.jpg');
    }
    SCComponent.prototype.addSlide = function (filename) {
        this.slides.push({
            image: "resources/workplace/01DIS OVERVIEW/" + filename
        });
    };
    return SCComponent;
}());
SCComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "sc.component.html"
    }),
    __metadata("design:paramtypes", [])
], SCComponent);
exports.SCComponent = SCComponent;
