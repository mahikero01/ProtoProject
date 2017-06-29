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
var team_org_component_1 = require("./team-org.component");
var team_apps_component_1 = require("./team-apps.component");
var team_services_component_1 = require("./team-services.component");
var routes = [
    //paths
    { path: 'Team-Org', component: team_org_component_1.TeamOrgComponent },
    { path: 'Team-Apps', component: team_apps_component_1.TeamAppsComponent },
    { path: 'Team-Services', component: team_services_component_1.TeamServicesComponent },
];
var TeamRouting = (function () {
    function TeamRouting() {
    }
    return TeamRouting;
}());
TeamRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], TeamRouting);
exports.TeamRouting = TeamRouting;
