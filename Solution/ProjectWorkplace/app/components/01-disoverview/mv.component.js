"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MVComponent = (function () {
    function MVComponent() {
        this.path = 'resources/workplace/01DIS OVERVIEW/01-Mission Vision.png';
        // path:string = '\\\\mne1050.prd.manulifeusa.com\\dept$\\ops\\Business Technologies\\Ref\\Eros Files\\Image 1.png';
        //path : string = "C:/Users/alverer/Desktop/Image 1.png";
        // path:string = 'file://mne1050.prd.manulifeusa.com//dept$//ops//Business%20Technologies//Ref//Eros%20Files//Image%201.png';
        //path:string ="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg";
        this.breadcrumbs = ['DIS Overview', 'Mission - Vision'];
    }
    return MVComponent;
}());
MVComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "mv.component.html"
    })
], MVComponent);
exports.MVComponent = MVComponent;
