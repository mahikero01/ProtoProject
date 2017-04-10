"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var vl_component_1 = require("./vl.component");
var workrule_component_1 = require("./workrule.component");
var policy_routing_1 = require("./policy.routing");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var PolicyModule = (function () {
    function PolicyModule() {
    }
    return PolicyModule;
}());
PolicyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            policy_routing_1.PolicyRouting
        ],
        declarations: [
            vl_component_1.VLComponent,
            workrule_component_1.WorkRuleComponent,
        ],
        providers: []
    })
], PolicyModule);
exports.PolicyModule = PolicyModule;
