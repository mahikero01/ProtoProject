import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Auth } from '../entities/auth';
@Injectable()
export class AuthService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/UserAuth';  
    
    constructor(private http: Http){}
    //pass the question id
    getAuthorization(): Promise<Auth> {
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