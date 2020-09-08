import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { PersonalInfoComponent } from './new-employee/personal-info/personal-info.component';
import { ContactsComponent } from './new-employee/contacts/contacts.component';
import { AddressComponent } from './new-employee/address/address.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchbarComponent },
  {
    path: 'new-employee',
    component: NewEmployeeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
