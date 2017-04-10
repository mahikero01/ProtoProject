"use strict";
var Answer = (function () {
    function Answer(AnswerID, //primary key
        QuestionID, AnswerDesc, IsActive, IsCorrect) {
        this.AnswerID = AnswerID;
        this.QuestionID = QuestionID;
        this.AnswerDesc = AnswerDesc;
        this.IsActive = IsActive;
        this.IsCorrect = IsCorrect;
    }
    return Answer;
}());
exports.Answer = Answer;
