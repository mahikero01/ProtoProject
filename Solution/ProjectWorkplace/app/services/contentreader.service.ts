import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Resource } from '../entities/resource';
@Injectable()
export class ContentReaderService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/contentreader';  
    
    constructor(private http: Http){}
    //pass the question id
    getContent(category:string): Promise<Resource> {
        const url = `${this.apiUrl}/?category=${category}`;
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