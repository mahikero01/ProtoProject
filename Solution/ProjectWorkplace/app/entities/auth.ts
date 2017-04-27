export class Auth {
    constructor (
        public isAuthenticated : Boolean,
        public userName : string,
        public domainName : string
    ){}
}