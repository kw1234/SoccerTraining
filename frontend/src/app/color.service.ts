import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class ColorService {

    private colorStore = [];

    private colorSubject = new Subject();

    color = this.colorSubject.asObservable();

    constructor(private http: Http) {}

    BASE_URL = 'https://randomcolor.wl.r.appspot.com/api';

    getColors(colorData) {
        //console.log(colorData);
        this.http.post(this.BASE_URL+'/postColors', colorData).subscribe(response => {
               console.log(response);
	       //console.log(JSON.stringify(response._body));
               //this.textStore = [response.json()];
               //this.textSubject.next(this.textStore);
	       this.colorStore = [response.json()];
	       console.log(this.colorStore);
	       this.colorSubject.next(this.colorStore);
	       //console.log(this.color);
           }, error => {
              console.log(`unable to get colors with error: ${error}`);
           });
    }

}