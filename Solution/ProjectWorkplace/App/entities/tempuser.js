"use strict";
var TempUser = (function () {
    function TempUser(ID, FirstName, LastName, Team, Leader, UserName, QuizScore, QuizItem, IsActive) {
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Team = Team;
        this.Leader = Leader;
        this.UserName = UserName;
        this.QuizScore = QuizScore;
        this.QuizItem = QuizItem;
        this.IsActive = IsActive;
    }
    return TempUser;
}());
exports.TempUser = TempUser;
