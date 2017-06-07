export class Answer {
    constructor (
        public AnswerID: string,//primary key
        public QuestionID: string,
        public AnswerDesc : string,
        public IsActive : Boolean,
        public IsCorrect : Boolean
    ){}
}