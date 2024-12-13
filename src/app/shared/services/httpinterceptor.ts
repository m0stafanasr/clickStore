import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor() {} // Remove NgxSpinnerService for now

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to modify it
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json', 
        // Add any additional headers here
      }
    });

    // Log the original request
    console.log('Interceptor - Outgoing Request:', {
      url: modifiedRequest.url,
      method: modifiedRequest.method
    });

    // Handle the request and log the response
    return next.handle(modifiedRequest).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('Interceptor - Incoming Response:', {
              url: event.url,
              status: event.status,
              body: event.body
            });
          }
        },
        error => {
          console.error('Interceptor - Error:', error);
        }
      )
    );
  }
}

