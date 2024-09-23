import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./HomeClient/home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import { InterpretersComponent } from './interpreter/interpreters/interpreters.component';
import { ClientsComponent } from './client/clients/clients.component';
import { AppointmentsComponent } from './booking/appointments/appointments.component';
import { CalendarComponent } from './interpreter/calendar/calendar.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { InterpreterDetailComponent } from './interpreter/interpreter-detail/interpreter-detail.component';
import { InvoiceListComponent } from './billing/invoice-list/invoice-list.component';
import { VideoCallComponent } from './booking/video-call/video-call.component';
import { InvoiceDetailComponent } from './billing/invoice-detail/invoice-detail.component';
import { AppointmentComponent } from './HomeClient/appointment/appointment.component';
import { BookingRequestComponent } from './booking/booking-request/booking-request.component';
import { CheckoutComponent } from './HomeClient/checkout/checkout.component';
import { PaymentComponent } from './HomeClient/payment/payment.component';
import { TenantManagementComponent } from './tenant/tenant-management/tenant-management.component';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import { SystemSettingsComponent } from './admin/system-settings/system-settings.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path: 'appointment/:id', component: AppointmentComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
  
  {path : "login", component : LoginComponent},
  {path: 'register', component: RegisterComponent },

  {path : "admin", component : AdminTemplateComponent, canActivate : [AuthGuard],

    children : [
      {path : "home", component : HomeComponent},
      
      {path : 'profile', component: UserProfileComponent},
      {path : "dashboard", component : DashboardComponent},
      {path : "interpreters", component : InterpretersComponent},
      {path : 'interpreters/:id', component: InterpreterDetailComponent },
      {path : "clients", component : ClientsComponent},
      {path : 'clients/:id', component: ClientDetailComponent },
      {path : "appointments", component : AppointmentsComponent},
      {path : "calendar", component : CalendarComponent},
      {path : "invoice", component : InvoiceListComponent},
      {path : "invoice/:id", component : InvoiceDetailComponent},
      {path : "videocall", component : VideoCallComponent},
      {path: 'booking-request', component: BookingRequestComponent },
      {path: 'tenant-management', component: TenantManagementComponent },
      {path: 'role-management', component: RoleManagementComponent },
      {path: 'system-settings', component: SystemSettingsComponent }

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
