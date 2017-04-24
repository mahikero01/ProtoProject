"use strict";
var Examinees = (function () {
    function Examinees(ExamineeID, PersonID, CodeNum, SubjectID, DateCompleted, Score, Items) {
        this.ExamineeID = ExamineeID;
        this.PersonID = PersonID;
        this.CodeNum = CodeNum;
        this.SubjectID = SubjectID;
        this.DateCompleted = DateCompleted;
        this.Score = Score;
        this.Items = Items;
    }
    return Examinees;
}());
exports.Examinees = Examinees;
