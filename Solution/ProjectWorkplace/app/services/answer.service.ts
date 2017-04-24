import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Answer } from '../entities/answer';
@Injectable()
export class AnswerService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Answers';  
    
    constructor(private http: Http){}
    //pass the question id
    getAnswers(id: string): Promise<Answer[]> {
        const url = `${this.apiUrl}/${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}