import { Component, OnInit } from '@angular/core';
import { RandomQuestionService } from '../../services/random-question.service';

import { Question } from '../../entities/question';
@Component({
    moduleId: module.id,
    templateUrl:'exam.component.html',
    styleUrls: ['exam.css'],
})
export class ExamComponent implements OnInit { 
    sample:string='sample1';
    favoriteSeason: string;
    questions:Question[]=[];

    constructor(
        public randomQuestionService: RandomQuestionService
    ){ }
    
    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    ngOnInit(){
        this.randomQuestionService.getQuestions()
            .then(rq=>this.questions=rq);
    }
    
}
