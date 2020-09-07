import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { PersonalInfoComponent } from './new-employee/personal-info/personal-info.component';
import { ContactsComponent } from './new-employee/contacts/contacts.component';
import { AddressComponent } from './new-employee/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchbarComponent,
    NotfoundComponent,
    SearchResultComponent,
    NewEmployeeComponent,
    PersonalInfoComponent,
    ContactsComponent,
    AddressComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
