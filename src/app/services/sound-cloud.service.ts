import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class SoundCloudService {

    constructor(private http: Http) { }

    public searchTerm: BehaviorSubject<string> = new BehaviorSubject('');

    public getTracks(searchTerm: string): Observable<any> {
        let url = `http://api.soundcloud.com/tracks?q=${searchTerm || ''}&client_id=8e1349e63dfd43dc67a63e0de3befc68`;
        return this.http.get(url).map(res => {
            let body = res.json();
            return body;
        }).catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
