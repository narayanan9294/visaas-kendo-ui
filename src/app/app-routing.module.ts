import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObBoardingComponent } from './on-boarding/ob-boarding.component';
import { EnquiryComponent } from './on-boarding/enquiry/enquiry.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewComponent } from './on-boarding/enquiry/view/view.component';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  {
    path: 'onboarding',
    component: ObBoardingComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'enquiry', component: EnquiryComponent },
      { path: 'enquiry-view', component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
