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
var vl_component_1 = require("./vl.component");
var workrule_component_1 = require("./workrule.component");
var bereavement_component_1 = require("./bereavement.component");
var information_component_1 = require("./information.component");
var privacy_component_1 = require("./privacy.component");
var routes = [
    //paths
    { path: 'vacation-leave', component: vl_component_1.VLComponent },
    { path: 'work-rule', component: workrule_component_1.WorkRuleComponent },
    { path: 'bereavement-policy', component: bereavement_component_1.BereavementComponent },
    { path: 'privacy-policy', component: privacy_component_1.PrivacyComponent },
    { path: 'information-security', component: information_component_1.InformationComponent },
];
var PolicyRouting = (function () {
    function PolicyRouting() {
    }
    return PolicyRouting;
}());
PolicyRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], PolicyRouting);
exports.PolicyRouting = PolicyRouting;
