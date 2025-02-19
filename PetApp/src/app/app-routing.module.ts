import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { EmployeesManagementComponent } from './pages/employees-management/employees-management.component';
import { ClientsManagementComponent } from './pages/clients-management/clients-management.component';
import { PetsManagementComponent } from './pages/pets-management/pets-management.component';
import { CalenderManagementComponent } from './pages/calender-management/calender-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesManagementComponent },
  { path: 'clients', component: ClientsManagementComponent },
  { path: 'pets', component: PetsManagementComponent },
  { path: 'calender', component: CalenderManagementComponent },
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }