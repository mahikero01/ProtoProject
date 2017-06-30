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
var person_service_1 = require("../../services/person.service");
var examinee_service_1 = require("../../services/examinee.service");
var router_1 = require("@angular/router");
var examinee_1 = require("../../entities/examinee");
var angular2_uuid_1 = require("angular2-uuid");
var tempuser_service_1 = require("../../services/tempuser.service");
var resource_service_1 = require("../../services/resource.service");
var ExamComponent = (function () {
    function ExamComponent(randomQuestionService, personService, examineeService, route, router, tempUserService, resourceService) {
        this.randomQuestionService = randomQuestionService;
        this.personService = personService;
        this.examineeService = examineeService;
        this.route = route;
        this.router = router;
        this.tempUserService = tempUserService;
        this.resourceService = resourceService;
        this.questions = [];
        this.scores = null;
        this.canSubmit = false;
        this.score = 0;
        this.viewScore = false;
        this.examinee = new examinee_1.Examinee(angular2_uuid_1.UUID.UUID(), angular2_uuid_1.UUID.UUID(), 0, '696bc6f9-d758-452e-b0d1-d40ebbcfd342', new Date(), 0, 0);
        this.username = '';
        this.breadcrumbs = ['Take the Exam'];
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.examineeService.getScore().then(x=>this.scores=x);
        this.randomQuestionService.getQuestions()
            .then(function (rq) {
            _this.questions = rq;
            _this.getExamineeInfo();
            _this.getExamDetail();
        });
        this.resourceService.getCurrentUser().then(function (user) { return _this.tempUser = user; });
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
        this.examinee.DateCompleted = new Date();
        this.examinee.Score = this.score;
        this.tempUser.QuizScore = this.score;
        this.tempUser.QuizItem = this.questions.length;
        this.tempUserService.putTempUser(this.tempUser).then(function () {
            console.log("..");
        });
        //service for posting score to PW_Examiners
        //this.examineeService.postExaminee(this.examinee);
    };
    ExamComponent.prototype.getExamineeInfo = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params['id'];
        });
        this.personService.getPerson(this.username)
            .then(function (p) { return _this.examinee.PersonID = p.PersonID; });
    };
    ExamComponent.prototype.getExamDetail = function () {
        this.examinee.Items = this.questions.length;
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'exam.component.html'
    }),
    __metadata("design:paramtypes", [random_question_service_1.RandomQuestionService,
        person_service_1.PersonService,
        examinee_service_1.ExamineeService,
        router_1.ActivatedRoute,
        router_1.Router,
        tempuser_service_1.TempUserService,
        resource_service_1.ResourceService])
], ExamComponent);
exports.ExamComponent = ExamComponent;
