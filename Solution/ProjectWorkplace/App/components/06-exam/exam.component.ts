import { Component, OnInit } from '@angular/core';
import { RandomQuestionService } from '../../services/random-question.service';
import { PersonService } from '../../services/person.service';
import { ExamineeService } from '../../services/examinee.service';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { Question } from '../../entities/question';
import { Examinee } from '../../entities/examinee';
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
    examinee:Examinee=new Examinee( UUID.UUID(), UUID.UUID(),0,'696bc6f9-d758-452e-b0d1-d40ebbcfd342',new Date(),0,0);
    username:string='';
    breadcrumbs =['Take the Exam'];
    constructor(
        public randomQuestionService: RandomQuestionService,
        public personService: PersonService,
        public examineeService: ExamineeService,
        private route: ActivatedRoute,
        private router: Router
    ){ 
    }

    ngOnInit(){
        this.randomQuestionService.getQuestions()
            .then(rq=>{
                this.questions=rq;
                this.getExamineeInfo();
                this.getExamDetail();
            });
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
        this.examinee.DateCompleted=new Date();
        this.examinee.Score=this.score;
        //service for posting score to PW_Examiners
        this.examineeService.postExaminee(this.examinee);
    }

    getExamineeInfo(){
        this.route.params.subscribe(params => {
            this.username = params['id'];}); 
        this.personService.getPerson(this.username)
            .then( p => this.examinee.PersonID = p.PersonID )   
    }
    getExamDetail(){
        this.examinee.Items= this.questions.length;
    }
}
