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
var TeamOrgComponent = (function () {
    function TeamOrgComponent() {
        this.slides = [];
        this.addSlide('ESD_OrgChart.pptx.png');
    }
    TeamOrgComponent.prototype.addSlide = function (filename) {
        this.slides.push({
            image: "resources/workplace/04 - Team/Gian Karlo Villaluz/" + filename
        });
    };
    return TeamOrgComponent;
}());
TeamOrgComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "team-org.component.html"
    }),
    __metadata("design:paramtypes", [])
], TeamOrgComponent);
exports.TeamOrgComponent = TeamOrgComponent;
