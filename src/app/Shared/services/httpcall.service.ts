import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpcallService {
  constructor(private _http: HttpClient) {}
  public retrieveMock(url: string) {
    return this._http.get<any>('app/components/' + url).pipe(delay(1000));
  }
}
