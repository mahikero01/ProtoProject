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
var sc_component_1 = require("./sc.component");
var strategies_component_1 = require("./strategies.component");
var programs_component_1 = require("./programs.component");
var routes = [
    //paths
    { path: 'mission-vision', component: mv_component_1.MVComponent },
    { path: 'organization', component: org_component_1.OrgComponent },
    { path: 'strategies', component: strategies_component_1.StrategiesComponent },
    { path: 'Functional-Tower', component: sc_component_1.SCComponent },
    { path: 'Programs/:id', component: programs_component_1.ProgramsComponent },
];
var DISOverviewRouting = (function () {
    function DISOverviewRouting() {
    }
    return DISOverviewRouting;
}());
DISOverviewRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DISOverviewRouting);
exports.DISOverviewRouting = DISOverviewRouting;
