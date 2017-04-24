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
var random_question_service_1 = require("../../services/random-question.service");
var ExamComponent = (function () {
    function ExamComponent(randomQuestionService) {
        this.randomQuestionService = randomQuestionService;
        this.questions = [];
        this.canSubmit = false;
        this.score = 0;
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomQuestionService.getQuestions()
            .then(function (rq) { return _this.questions = rq; });
    };
    ExamComponent.prototype.checkAnswers = function () {
        this.score = 0;
        var ctr = 0;
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            //console.log(question.Answer);
            ctr = ctr + (question.Answer == 0 ? 1 : 0);
            this.score = this.score + (question.Answer == 1 ? 1 : 0);
        }
        this.canSubmit = ctr == 0;
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'exam.component.html'
    }),
    __metadata("design:paramtypes", [random_question_service_1.RandomQuestionService])
], ExamComponent);
exports.ExamComponent = ExamComponent;
