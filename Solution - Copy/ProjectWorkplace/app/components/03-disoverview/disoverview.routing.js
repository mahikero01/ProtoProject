"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//component
var mv_component_1 = require("./mv.component");
var org_component_1 = require("./org.component");
var strategies_component_1 = require("./strategies.component");
var photosampleRoutes = [
    //paths
    { path: 'mission-vision', component: mv_component_1.MVComponent },
    { path: 'organization', component: org_component_1.OrgComponent },
    { path: 'strategies', component: strategies_component_1.StrategiesComponent },
];
var DISOverviewRouting = (function () {
    function DISOverviewRouting() {
    }
    return DISOverviewRouting;
}());
DISOverviewRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(photosampleRoutes)],
        exports: [router_1.RouterModule]
    })
], DISOverviewRouting);
exports.DISOverviewRouting = DISOverviewRouting;