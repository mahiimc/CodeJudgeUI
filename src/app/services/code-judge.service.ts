import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeJudgeService {
  apiUrl = 'http://localhost:8080/judge';

  constructor(private _http: HttpClient) {}

  judgeCode(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }
}
