"use strict";
var Question = (function () {
    function Question(QuestionID, //primary key
        QuestionDesc, IsCommon, IsMultipleAns, IsActive) {
        this.QuestionID = QuestionID;
        this.QuestionDesc = QuestionDesc;
        this.IsCommon = IsCommon;
        this.IsMultipleAns = IsMultipleAns;
        this.IsActive = IsActive;
    }
    return Question;
}());
exports.Question = Question;
