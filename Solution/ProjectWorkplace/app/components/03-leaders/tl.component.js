"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TLComponent = (function () {
    function TLComponent() {
        //path:string = 'resources/mock/videoplayback.mp4';
        this.path = 'resources/workplace/03LEADERS/gk.mp4';
        this.breadcrumbs = ['Leaders\' Video', 'Team Leader'];
    }
    return TLComponent;
}());
TLComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "generic-vid.component.html"
    })
], TLComponent);
exports.TLComponent = TLComponent;
