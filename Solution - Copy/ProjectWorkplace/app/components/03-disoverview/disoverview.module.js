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
var mv_component_1 = require("./mv.component");
var org_component_1 = require("./org.component");
var strategies_component_1 = require("./strategies.component");
var disoverview_routing_1 = require("./disoverview.routing");
var viewer_module_1 = require("../viewer/viewer.module");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var DISOverviewModule = (function () {
    function DISOverviewModule() {
    }
    return DISOverviewModule;
}());
DISOverviewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            viewer_module_1.ViewerModule,
            disoverview_routing_1.DISOverviewRouting
        ],
        declarations: [
            mv_component_1.MVComponent,
            org_component_1.OrgComponent,
            strategies_component_1.StrategiesComponent
        ],
        providers: []
    })
], DISOverviewModule);
exports.DISOverviewModule = DISOverviewModule;
