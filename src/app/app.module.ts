import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GridModule} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { AppComponent } from './app.component';
import { OnBoardingModule } from './on-boarding/on-boarding.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './common/global-error-handler';
import { SharedModule } from './shared/shared.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';
import { KeycloakInterceptor } from './keycloak.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from "@progress/kendo-angular-navigation";
function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: environment.idpurl,
          realm: '73',
          clientId: 'visaas-client'
        },
        initOptions: {
              onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
             flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
        }
      });
  }

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    OnBoardingModule,
    RouterModule,
    HttpClientModule,
    KeycloakAngularModule,
    SharedModule,
    GridModule,
    InputsModule,
    NavigationModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }, 
    {
        provide: HTTP_INTERCEPTORS,
        useClass: KeycloakInterceptor,
        multi: true,
      },
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
})
export class AppModule {}
