"use strict";
var Question = (function () {
    function Question(QuestionID, //primary key
        QuestionDesc, IsCommon, IsMultipleAns, IsActive, Answer) {
        this.QuestionID = QuestionID;
        this.QuestionDesc = QuestionDesc;
        this.IsCommon = IsCommon;
        this.IsMultipleAns = IsMultipleAns;
        this.IsActive = IsActive;
        this.Answer = Answer;
    }
    return Question;
}());
exports.Question = Question;
