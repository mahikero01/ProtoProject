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
var StrategiesComponent = (function () {
    function StrategiesComponent() {
        this.slides = [];
        //path:string = 'resources/workplace/01DIS OVERVIEW/03-Strategies.png';
        this.breadcrumbs = ['DIS Overview', 'Strategies'];
        this.addSlide('03a - customer experience.png');
        this.addSlide('03b - process improvement.png');
        this.addSlide('03c - cost efficiencies.png');
        this.addSlide('03d - performance.png');
    }
    StrategiesComponent.prototype.addSlide = function (filename) {
        this.slides.push({
            image: "resources/workplace/01DIS OVERVIEW/strategies/" + filename
        });
    };
    return StrategiesComponent;
}());
StrategiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "strategies.component.html"
    }),
    __metadata("design:paramtypes", [])
], StrategiesComponent);
exports.StrategiesComponent = StrategiesComponent;
