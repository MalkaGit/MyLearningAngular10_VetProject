import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesManagementComponent } from './pages/employees-management/employees-management.component';
import { ClientsManagementComponent } from './pages/clients-management/clients-management.component';
import { PetsManagementComponent } from './pages/pets-management/pets-management.component';
import { CalenderManagementComponent } from './pages/calender-management/calender-management.component';
import { MainNavigationComponent } from './layouts/main-navigation/main-navigation.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesManagementComponent,
    ClientsManagementComponent,
    PetsManagementComponent,
    CalenderManagementComponent,
    MainNavigationComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
