"use strict";
var Leader = (function () {
    function Leader(LeaderID, LeaderName, ManagerID) {
        this.LeaderID = LeaderID;
        this.LeaderName = LeaderName;
        this.ManagerID = ManagerID;
    }
    return Leader;
}());
exports.Leader = Leader;
