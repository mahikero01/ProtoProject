"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_1 = require("./entities/auth");
var tempuser_1 = require("./entities/tempuser");
var team_service_1 = require("./services/team.service");
var leader_service_1 = require("./services/leader.service");
var tempuser_service_1 = require("./services/tempuser.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(teamService, leaderService, tempuserService) {
        this.teamService = teamService;
        this.leaderService = leaderService;
        this.tempuserService = tempuserService;
        this.user = new auth_1.Auth(true, '', '');
        this.cv = new core_1.EventEmitter();
        this.teams = [];
        this.leaders = [];
        this.tempuser = new tempuser_1.TempUser(0, "", "", "", 0, "", 0, 0, true);
        this.photo = 'Resources/Images/background.png';
        this.getTeams();
        this.getLeaders();
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams = teams; });
    };
    WelcomeComponent.prototype.getLeaders = function () {
        var _this = this;
        this.leaderService.getLeaders().then(function (leaders) { return _this.leaders = leaders; });
    };
    WelcomeComponent.prototype.submitUser = function () {
        if (this.tempuser.FirstName == "" ||
            this.tempuser.LastName == "" ||
            this.tempuser.TeamID == "" ||
            this.tempuser.LeaderID == 0) {
            alert("Some fields are not supplied.");
        }
        else {
            this.tempuser.UserName = this.user.userName;
            this.tempuserService.postTempUser(this.tempuser).then(function () {
                //console.log("okay");
            });
            this.changeView();
        }
    };
    WelcomeComponent.prototype.changeView = function () {
        this.cv.emit();
    };
    return WelcomeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", auth_1.Auth)
], WelcomeComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WelcomeComponent.prototype, "cv", void 0);
WelcomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'welcome-user',
        templateUrl: 'welcome.html',
        styleUrls: ['welcome.css']
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService,
        leader_service_1.LeaderService,
        tempuser_service_1.TempUserService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
