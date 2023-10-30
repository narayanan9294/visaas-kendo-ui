import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular'; // Import your Keycloak service here

@Injectable()
export class KeycloakInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    let accessToken;
     this.keycloakService.getToken().then((token) => {
      // `token` is the resolved value
      console.log('Access token:', token);
      accessToken=token;
      // You can perform further actions with the token here
    })
    .catch((error) => {
      // Handle any errors that may occur during token retrieval
      console.error('Error:', error);
    });

    if (accessToken) { 
      request = request.clone({
        setHeaders: {
          Authorization: `${accessToken}`, 
        },
      });
    }

    return next.handle(request);
  }
}
