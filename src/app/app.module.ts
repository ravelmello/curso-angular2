import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeDirective } from './directives/employee.directive';
import { EmployeeModalComponent } from './modais/employee-modal/employee-modal.component';
import { EmployeeEditModalComponent } from './modais/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './modais/employee-delete-modal/employee-delete-modal.component';
import { CurrencyPipe } from './pipes/currency/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeDirective,
    EmployeeModalComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
