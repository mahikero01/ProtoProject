export class Question {
    constructor (
        public QuestionID: string,//primary key
        public QuestionDesc: string,
        public IsCommon : Boolean,
        public IsMultipleAns : Boolean,
        public IsActive : Boolean,
        public Answer: number
    ){}
}