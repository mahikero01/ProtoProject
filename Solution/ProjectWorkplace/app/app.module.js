"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var non_auth_1 = require("./non-auth");
var auth_user_1 = require("./auth-user");
//ComponentModules
var disoverview_module_1 = require("./components/03-disoverview/disoverview.module");
var distools_module_1 = require("./components/05-dis-tools/distools.module");
var policy_module_1 = require("./components/06-policy/policy.module");
var exam_module_1 = require("./components/07-exam/exam.module");
//routing
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            common_1.CommonModule,
            //SynchronizationModule, 
            disoverview_module_1.DISOverviewModule,
            distools_module_1.DISToolsModule,
            policy_module_1.PolicyModule,
            exam_module_1.ExamModule,
            app_routing_1.AppRouting
        ],
        declarations: [app_component_1.AppComponent, non_auth_1.NonAuthComponent, auth_user_1.AuthUserComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
