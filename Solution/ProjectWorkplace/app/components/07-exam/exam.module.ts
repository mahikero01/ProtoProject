import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
// import { BrowserModule} from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExamComponent } from './exam.component';
import { ExamFormComponent } from './exam-form.component';
import { ExamRouting } from './exam.routing';

import { RandomQuestionService } from '../../services/random-question.service';
import { AnswerService } from '../../services/answer.service';
@NgModule({
    imports: [
        //BrowserModule,
        CommonModule,
        //NoopAnimationsModule,
        FormsModule,
        MaterialModule,
        ExamRouting
    ],
    declarations: [
        ExamComponent,
        ExamFormComponent
    ],
    providers: [
        RandomQuestionService,
        AnswerService
    ]
})

export class ExamModule {}