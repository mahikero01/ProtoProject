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
var tl_component_1 = require("./tl.component");
var avp_component_1 = require("./avp.component");
var manager_component_1 = require("./manager.component");
var routes = [
    //paths
    { path: 'Team-Leader', component: tl_component_1.TLComponent },
    { path: 'Manager', component: manager_component_1.ManagerComponent },
    { path: 'FH', component: avp_component_1.AVPComponent },
];
var LeadersRouting = (function () {
    function LeadersRouting() {
    }
    return LeadersRouting;
}());
LeadersRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], LeadersRouting);
exports.LeadersRouting = LeadersRouting;
