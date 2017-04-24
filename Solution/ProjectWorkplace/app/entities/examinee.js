"use strict";
var Examinee = (function () {
    function Examinee(ExamineeID, PersonID, CodeNum, SubjectID, DateCompleted, Score, Items) {
        this.ExamineeID = ExamineeID;
        this.PersonID = PersonID;
        this.CodeNum = CodeNum;
        this.SubjectID = SubjectID;
        this.DateCompleted = DateCompleted;
        this.Score = Score;
        this.Items = Items;
    }
    return Examinee;
}());
exports.Examinee = Examinee;
