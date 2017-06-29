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
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var auth_user_1 = require("./auth-user");
var welcome_1 = require("./welcome");
//ComponentModules
var disoverview_module_1 = require("./components/01-disoverview/disoverview.module");
var team_module_1 = require("./components/02-teamoverview/team.module");
var leaders_module_1 = require("./components/03-leaders/leaders.module");
var distools_module_1 = require("./components/04-distools/distools.module");
var policy_module_1 = require("./components/05-policy/policy.module");
var exam_module_1 = require("./components/06-exam/exam.module");
//routing
var app_routing_1 = require("./app.routing");
//services
var auth_service_1 = require("./services/auth.service");
var team_service_1 = require("./services/team.service");
var leader_service_1 = require("./services/leader.service");
var tempuser_service_1 = require("./services/tempuser.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            leaders_module_1.LeadersModule,
            disoverview_module_1.DISOverviewModule,
            team_module_1.TeamModule,
            distools_module_1.DISToolsModule,
            policy_module_1.PolicyModule,
            exam_module_1.ExamModule,
            app_routing_1.AppRouting
        ],
        declarations: [app_component_1.AppComponent, auth_user_1.AuthUserComponent, welcome_1.WelcomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_service_1.AuthService, team_service_1.TeamService, leader_service_1.LeaderService, tempuser_service_1.TempUserService]
    })
], AppModule);
exports.AppModule = AppModule;
