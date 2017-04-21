import { Component, OnInit } from '@angular/core';
import { RandomQuestionService } from '../../services/random-question.service';

import { Question } from '../../entities/question';
@Component({
    moduleId: module.id,
    templateUrl:'exam.component.html'
})
export class ExamComponent implements OnInit { 
    questions:Question[]=[];

    constructor(
        public randomQuestionService: RandomQuestionService
    ){ }
    
    checkAnswers():boolean{
        var ctr:number=0;
        for (let question of this.questions) {
           ctr =+ question.Answer==0 ? 1 : 0;
        }
        return ctr==0 ? true : false;
    }

    ngOnInit(){
        this.randomQuestionService.getQuestions()
            .then(rq=>this.questions=rq);
    }
    
}
