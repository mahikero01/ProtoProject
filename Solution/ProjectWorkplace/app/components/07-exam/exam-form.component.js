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
/* entities */
var question_1 = require("../../entities/question");
/* Service */
var answer_service_1 = require("../../services/answer.service");
var ExamFormComponent = (function () {
    function ExamFormComponent(answerService) {
        this.answerService = answerService;
        this.answer = '';
        this.answers = [];
    }
    ExamFormComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService.getAnswers(this.question.QuestionID)
            .then(function (ans) { return _this.answers = ans; })
            .catch(function () {
            console.log('error on getting answers - getAnswers()');
        });
    };
    ExamFormComponent.prototype.ngOnInit = function () {
        this.getAnswers();
    };
    return ExamFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", question_1.Question)
], ExamFormComponent.prototype, "question", void 0);
ExamFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "exam-form",
        templateUrl: 'exam.component.html',
        styleUrls: ['exam.css'],
    }),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], ExamFormComponent);
exports.ExamFormComponent = ExamFormComponent;
