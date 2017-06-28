"use strict";
var Team = (function () {
    function Team(TeamID, TeamDesc, IsActive) {
        this.TeamID = TeamID;
        this.TeamDesc = TeamDesc;
        this.IsActive = IsActive;
    }
    return Team;
}());
exports.Team = Team;
