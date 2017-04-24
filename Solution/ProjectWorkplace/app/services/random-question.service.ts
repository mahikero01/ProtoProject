import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Question } from '../entities/question';
@Injectable()
export class RandomQuestionService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/RandQuestions';  
    
    constructor(private http: Http){}

    getQuestions(): Promise<Question[]> {
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}