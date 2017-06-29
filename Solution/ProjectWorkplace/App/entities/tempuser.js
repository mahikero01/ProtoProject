"use strict";
var TempUser = (function () {
    function TempUser(ID, FirstName, LastName, TeamID, LeaderID, UserName, QuizScore, QuizItem, IsActive) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.TeamID = TeamID;
        this.LeaderID = LeaderID;
        this.UserName = UserName;
        this.QuizScore = QuizScore;
        this.QuizItem = QuizItem;
        this.IsActive = IsActive;
    }
    return TempUser;
}());
exports.TempUser = TempUser;
