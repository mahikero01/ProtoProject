import { Component, OnInit } from '@angular/core';
import { RandomQuestionService } from '../../services/random-question.service';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { Question } from '../../entities/question';
import { Examinees } from '../../entities/examinees';
import { UUID } from 'angular2-uuid';

@Component({
    moduleId: module.id,
    templateUrl:'exam.component.html'
})
export class ExamComponent implements OnInit { 
    questions:Question[]=[];
    canSubmit:boolean=false;
    score:number = 0;
    viewScore:boolean=false;
    examinee:Examinees=new Examinees( UUID.UUID(), UUID.UUID(),0,'',new Date(),0,0);
    username:string='';
    constructor(
        public randomQuestionService: RandomQuestionService,
        private route: ActivatedRoute,
        private router: Router
    ){ 
        this.getExamineeInfo();
    }
    

    ngOnInit(){
        this.randomQuestionService.getQuestions()
            .then(rq=>this.questions=rq);
    }
    //check answers if it is ready to submit
    checkAnswers():void{
        this.score=0;
        var ctr:number=0;
        for (let question of this.questions) {
            //console.log(question.Answer);
            ctr = ctr + (question.Answer==0 ? 1 : 0);
            this.score = this.score + (question.Answer==1 ? 1 : 0);
        }
        this.canSubmit=ctr==0;
    }
    //submits the score
    submitScore():void{
        this.viewScore=true;
        //service for posting score to PW_Examiners

    }

    getExamineeInfo(){
        this.route.params.subscribe(params => {
            this.username = params['id'];});    
    }
}
