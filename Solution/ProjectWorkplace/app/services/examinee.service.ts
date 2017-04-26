import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Examinee } from '../entities/examinee';
@Injectable()
export class ExamineeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Examinees';  
    
    constructor(private http: Http){}
    //pass the question id
    getExaminees():Promise<Examinee[]>{
        return this.http
                .get(this.apiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    getExaminee(personId: string): Promise<Examinee[]> {
        const url = `${this.apiUrl}/${personId}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  
                .catch(this.handleError);      
    }

    postExaminee(newExaminee: Examinee): Promise<Examinee> {
        return this.http
            .post(this.apiUrl, JSON.stringify(newExaminee), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    putExaminee(examinee: Examinee): Promise<Examinee> {
        const url = `${this.apiUrl}/${examinee.ExamineeID}`;
        return this.http
            .put(url, JSON.stringify(examinee), {headers: this.headers})
            .toPromise()
            .then(() => examinee)
            .catch(this.handleError);
    }
    
    DeleteExaminee(examineeId: string): Promise<void> {
        const url = `${this.apiUrl}/${examineeId}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}