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
var tl_component_1 = require("./tl.component");
var manager_component_1 = require("./manager.component");
var avp_component_1 = require("./avp.component");
var leaders_routing_1 = require("./leaders.routing");
var viewer_module_1 = require("../viewer/viewer.module");
var resource_service_1 = require("../../services/resource.service");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var LeadersModule = (function () {
    function LeadersModule() {
    }
    return LeadersModule;
}());
LeadersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            viewer_module_1.ViewerModule,
            leaders_routing_1.LeadersRouting
        ],
        declarations: [
            tl_component_1.TLComponent,
            avp_component_1.AVPComponent,
            manager_component_1.ManagerComponent
        ],
        providers: [
            resource_service_1.ResourceService
        ]
    })
], LeadersModule);
exports.LeadersModule = LeadersModule;
