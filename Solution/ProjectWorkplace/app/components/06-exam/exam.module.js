"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("hammerjs");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
// import { BrowserModule} from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
var exam_component_1 = require("./exam.component");
var exam_form_component_1 = require("./exam-form.component");
var exam_routing_1 = require("./exam.routing");
var random_question_service_1 = require("../../services/random-question.service");
var answer_service_1 = require("../../services/answer.service");
var person_service_1 = require("../../services/person.service");
var examinee_service_1 = require("../../services/examinee.service");
var tempuser_service_1 = require("../../services/tempuser.service");
var resource_service_1 = require("../../services/resource.service");
var ExamModule = (function () {
    function ExamModule() {
    }
    return ExamModule;
}());
ExamModule = __decorate([
    core_1.NgModule({
        imports: [
            //BrowserModule,
            common_1.CommonModule,
            //NoopAnimationsModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
            exam_routing_1.ExamRouting
        ],
        declarations: [
            exam_component_1.ExamComponent,
            exam_form_component_1.ExamFormComponent
        ],
        providers: [
            random_question_service_1.RandomQuestionService,
            answer_service_1.AnswerService,
            person_service_1.PersonService,
            examinee_service_1.ExamineeService,
            tempuser_service_1.TempUserService,
            resource_service_1.ResourceService
        ]
    })
], ExamModule);
exports.ExamModule = ExamModule;
