export class Examinee {
    constructor (
        public ExamineeID : string,
        public PersonID : string,
        public CodeNum : number,
        public SubjectID : string,
        public DateCompleted : Date,
        public Score : number,
        public Items : number
    ){}
}