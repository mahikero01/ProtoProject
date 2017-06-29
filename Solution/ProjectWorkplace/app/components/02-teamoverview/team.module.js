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
var team_org_component_1 = require("./team-org.component");
var team_apps_component_1 = require("./team-apps.component");
var team_services_component_1 = require("./team-services.component");
var team_routing_1 = require("./team.routing");
var viewer_module_1 = require("../viewer/viewer.module");
/* ngx-bootstrap */
var ngx_bootstrap_1 = require("ngx-bootstrap");
/*services */
var resource_service_1 = require("../../services/resource.service");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var TeamModule = (function () {
    function TeamModule() {
    }
    return TeamModule;
}());
TeamModule = __decorate([
    core_1.NgModule({
        imports: [
            ngx_bootstrap_1.CarouselModule.forRoot(),
            common_1.CommonModule,
            forms_1.FormsModule,
            viewer_module_1.ViewerModule,
            team_routing_1.TeamRouting
        ],
        declarations: [
            team_org_component_1.TeamOrgComponent,
            team_apps_component_1.TeamAppsComponent,
            team_services_component_1.TeamServicesComponent,
        ],
        providers: [
            resource_service_1.ResourceService,
        ]
    })
], TeamModule);
exports.TeamModule = TeamModule;
