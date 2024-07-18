import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoaderInterceptorService implements HttpInterceptor {
// constructor(private loader: LoaderService) {}
// intercept()
// req: HttpRequest<any>,
// next: HttpHandler
// ): Observable<HttpEvent<any>> {
// // this.loader.showLoader();
// return next
//   .handle(req)
//   .pipe
// delay(1000),
// finalize(() => this.loader.hideLoader())
//     ();
// }
// }
