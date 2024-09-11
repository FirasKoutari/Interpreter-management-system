import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import { HomeComponent } from './HomeClient/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatInput} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthorizationGuard} from "./guards/authorization.guard";
import { InterpretersComponent } from './interpreter/interpreters/interpreters.component';
import { ClientsComponent } from './client/clients/clients.component';
import { AppointmentsComponent } from './booking/appointments/appointments.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarComponent } from './interpreter/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoUtilsModule } from './demo-utils/module';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { VideoCallComponent } from './booking/video-call/video-call.component';
import { InvoiceListComponent } from './billing/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './billing/invoice-detail/invoice-detail.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationDetailComponent } from './notification/notification-detail/notification-detail.component';
import { RoleManagementComponent } from './admin/role-management/role-management.component';
import { SystemSettingsComponent } from './admin/system-settings/system-settings.component';
import { InterpreterDetailComponent } from './interpreter/interpreter-detail/interpreter-detail.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookingRequestComponent } from './booking/booking-request/booking-request.component';
import { BookingManagementComponent } from './booking/booking-management/booking-management.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { TenantManagementComponent } from './tenant/tenant-management/tenant-management.component';
import { TenantDetailComponent } from './tenant/tenant-detail/tenant-detail.component'; // Importer MatExpansionModule
import { MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './Dialog/popup/popup.component'
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './Dialog/confirm-dialog/confirm-dialog.component';
import { PopupInterpreterComponent } from './Dialog/popup-interpreter/popup-interpreter.component';
import { PopupInvoiceComponent } from './Dialog/popup-invoice/popup-invoice.component';
import { AppointmentComponent } from './HomeClient/appointment/appointment.component';
//import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { CheckoutComponent } from './HomeClient/checkout/checkout.component';
import { PaymentComponent } from './HomeClient/payment/payment.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';






@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    InterpretersComponent,
    ClientsComponent,
    AppointmentsComponent,
    PaymentComponent,
    CalendarComponent,
    RegisterComponent,
    UserProfileComponent,
    VideoCallComponent,
    InvoiceListComponent,
    InvoiceDetailComponent,
    NotificationListComponent,
    NotificationDetailComponent,
    RoleManagementComponent,
    SystemSettingsComponent,
    InterpreterDetailComponent,
    BookingRequestComponent,
    BookingManagementComponent,
    ClientDetailComponent,
    TenantManagementComponent,
    TenantDetailComponent,
    PopupComponent,
    ConfirmDialogComponent,
    PopupInterpreterComponent,
    PopupInvoiceComponent,
    AppointmentComponent,
    CheckoutComponent

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListItem,
    MatListModule,
    MatNavList,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatInput,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule,
    MatTreeModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    MatTabsModule,
    MatChipsModule


  ],
  providers: [
    AuthGuard, AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
