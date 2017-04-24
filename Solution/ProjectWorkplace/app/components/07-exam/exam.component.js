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
var router_1 = require("@angular/router");
var examinees_1 = require("../../entities/examinees");
var angular2_uuid_1 = require("angular2-uuid");
var ExamComponent = (function () {
    function ExamComponent(randomQuestionService, route, router) {
        this.randomQuestionService = randomQuestionService;
        this.route = route;
        this.router = router;
        this.questions = [];
        this.canSubmit = false;
        this.score = 0;
        this.viewScore = false;
        this.examinee = new examinees_1.Examinees(angular2_uuid_1.UUID.UUID(), angular2_uuid_1.UUID.UUID(), 0, '', new Date(), 0, 0);
        this.username = '';
        this.getExamineeInfo();
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomQuestionService.getQuestions()
            .then(function (rq) { return _this.questions = rq; });
    };
    //check answers if it is ready to submit
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
    //submits the score
    ExamComponent.prototype.submitScore = function () {
        this.viewScore = true;
        //service for posting score to PW_Examiners
    };
    ExamComponent.prototype.getExamineeInfo = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params['id'];
        });
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'exam.component.html'
    }),
    __metadata("design:paramtypes", [random_question_service_1.RandomQuestionService,
        router_1.ActivatedRoute,
        router_1.Router])
], ExamComponent);
exports.ExamComponent = ExamComponent;
