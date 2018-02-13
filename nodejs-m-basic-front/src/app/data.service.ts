import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getGenres() {
    return this._http.get("api/genres")
            .map(
              result => this.result = result.json()
            );
  }

}
