import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
/* entities */
import { Question } from '../../entities/question';
import { Answer } from '../../entities/answer';
/* Service */
import { AnswerService } from '../../services/answer.service';

@Component({
    moduleId: module.id,
    selector: `exam-form`,
    templateUrl:'exam-form.component.html',
    outputs: []
})
export class ExamFormComponent implements OnInit { 
    @Input() question:Question;
    @Output() counterChange = new EventEmitter();
    answer:string='';
    answers:Answer[]=[];
    
    constructor(
        public answerService: AnswerService
    ){ }
    
    getAnswer(ans:boolean){
        var userAnswer = ans==true ? 1 : -1 ;
        this.question.Answer=userAnswer;
        this.counterChange.emit( this.question);
    }

    getAnswers():void{
        this.answerService.getAnswers(this.question.QuestionID)
            .then(ans => this.answers = ans)
            .catch(()=>{
                console.log('error on getting answers - getAnswers()');
            });
    }

    ngOnInit(){
        this.getAnswers();
    }
    
}
