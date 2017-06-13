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
var opt_component_1 = require("./opt.component");
var khronos_component_1 = require("./khronos.component");
var workday_component_1 = require("./workday.component");
var contacts_component_1 = require("./contacts.component");
var viewer_module_1 = require("../viewer/viewer.module");
var distools_routing_1 = require("./distools.routing");
/* ngx-bootstrap */
var ngx_bootstrap_1 = require("ngx-bootstrap");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var DISToolsModule = (function () {
    function DISToolsModule() {
    }
    return DISToolsModule;
}());
DISToolsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ngx_bootstrap_1.CarouselModule.forRoot(),
            viewer_module_1.ViewerModule,
            distools_routing_1.DISToolsRouting
        ],
        declarations: [
            opt_component_1.OptComponent,
            khronos_component_1.KhronosComponent,
            workday_component_1.WorkdayComponent,
            contacts_component_1.ContactsComponent
        ],
        providers: []
    })
], DISToolsModule);
exports.DISToolsModule = DISToolsModule;
