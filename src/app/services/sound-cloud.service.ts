import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SoundCloudService {

    constructor(private http: Http) { }

    public searchTerm: BehaviorSubject<string> = new BehaviorSubject('');

}
