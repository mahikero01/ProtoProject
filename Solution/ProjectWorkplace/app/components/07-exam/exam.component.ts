import { Component, OnInit } from '@angular/core';
import { RandomQuestionService } from '../../services/random-question.service';

import { Question } from '../../entities/question';
@Component({
    moduleId: module.id,
    templateUrl:'exam.component.html'
})
export class ExamComponent implements OnInit { 
    questions:Question[]=[];
    canSubmit:boolean=false;
    score:number = 0;

    constructor(
        public randomQuestionService: RandomQuestionService
    ){ }
    

    ngOnInit(){
        this.randomQuestionService.getQuestions()
            .then(rq=>this.questions=rq);
    }
    
    checkAnswers(){
        this.score=0;
        var ctr:number=0;
        for (let question of this.questions) {
            //console.log(question.Answer);
            ctr = ctr + (question.Answer==0 ? 1 : 0);
            this.score = this.score + (question.Answer==1 ? 1 : 0);
        }
        this.canSubmit=ctr==0;
    }
}
