import { Component, OnInit } from '@angular/core';
import EmployeeScheme from '../employee.scheme';
import { data } from '../data';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  employees: EmployeeScheme[] = data;
  N = 100 - 18;
  arrayAge = Array.apply(null, { length: this.N }).map(Number.call, Number);
  arrayGender = ['Male', 'Female', 'Others'];

  searchResult: EmployeeScheme[];
  searchTerm: string;
  searchFilter = 'firstName';
  showResult = false;
  dobFilter: string;
  ageFilter: number;
  genderFilter: string;

  inputDateHandler(i: string): void {
    this.dobFilter = i;
    this.genderFilter = null;
    this.ageFilter = null;
  }
  inputGenderHandler(i: string): void {
    this.genderFilter = i;
    this.ageFilter = null;
    this.dobFilter = null;
  }
  inputAgeHandler(i: number): void {
    this.ageFilter = i + 18;
    this.genderFilter = null;
    this.dobFilter = null;
  }

  search(): void {
    // tslint:disable-next-line: curly
    if (!this.searchTerm) return;

    if (!this.dobFilter && !this.ageFilter && !this.genderFilter) {
      this.searchResult = this.employees.filter((emp) => {
        return emp[this.searchFilter].toString().toLowerCase() ===
          this.searchTerm.toLowerCase()
          ? emp
          : null;
      });
    } else if (this.dobFilter) {
      this.searchResult = this.employees.filter((emp) => {
        return emp[this.searchFilter].toString().toLowerCase() ===
          this.searchTerm.toLowerCase() && compareDates(emp.DOB, this.dobFilter)
          ? emp
          : null;
      });
    } else if (this.ageFilter) {
      this.searchResult = this.employees.filter((emp) => {
        return emp[this.searchFilter].toString().toLowerCase() ===
          this.searchTerm.toLowerCase() && getAge(emp.DOB) === this.ageFilter
          ? emp
          : null;
      });
    } else if (this.genderFilter) {
      this.searchResult = this.employees.filter((emp) => {
        return emp[this.searchFilter].toString().toLowerCase() ===
          this.searchTerm.toLowerCase() &&
          emp.gender.toLowerCase() === this.genderFilter.toLowerCase()
          ? emp
          : null;
      });
    } else {
      return;
    }
    this.searchTerm = null;
    this.showResult = this.searchResult ? true : false;
  }

  ngOnInit(): void {}
}

const getAge = (dateString: string): number => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const compareDates = (dateA: string, dateB: string): boolean => {
  const a = new Date(dateA);
  const b = new Date(dateB);
  // tslint:disable-next-line: curly
  if (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  )
    return true;
  return false;
};
