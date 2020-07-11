import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class ColorService {

    private colorStore = [];

    private colorSubject = new Subject();

    text = this.colorSubject.asObservable();

    constructor(private http: Http) {}

    BASE_URL = 'http://localhost:8080/api';

    getColors(colorData) {
        console.log(colorData);
        this.http.post(this.BASE_URL+'/postColors', colorData).subscribe(response => {
               console.log(response);
               //this.textStore = [response.json()];
               //this.textSubject.next(this.textStore);
           }, error => {
              console.log(`unable to get colors with error: ${error}`);
           });

    }

}