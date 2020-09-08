import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import EmployeeScheme from '../employee.scheme';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent {
  @Output() submittedEmployee: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private dataService: DataService) {}
  // set data(value: EmployeeScheme) {
  //   this.dataService.sharedData.push(value);
  // }
  // get data(i) {
  //   return this.dataService.sharedData;
  // }
  newEmployee: EmployeeScheme;
  count = 0;
  inputCounter: string;
  gender: string;
  arrayGender = ['Male', 'Female', 'Others'];
  message: string;
  personalInfo = new FormGroup({
    firstName: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
    lastName: new FormControl('', { updateOn: 'blur' }),

    DOB: new FormControl('', { updateOn: 'blur' }),
    gender: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
    department: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
    designation: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur',
    }),
  });
  myContact = new FormGroup({
    homePhone: new FormControl(''),
    workPhone: new FormControl('', Validators.required),
    personalEmail: new FormControl(''),
    workEmail: new FormControl('', Validators.required),
  });
  currentAddress = new FormGroup({
    streetAddress: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pinCode: new FormControl('', Validators.required),
  });

  permanentAddress = new FormGroup({
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pinCode: new FormControl(''),
  });

  sameAddress(): void {
    const {
      streetAddress,
      city,
      state,
      country,
      pinCode,
    } = this.currentAddress.value;
    this.permanentAddress.setValue({
      streetAddress,
      city,
      state,
      country,
      pinCode,
    });
    console.log(this.permanentAddress.value);
  }
  setGender(i): void {
    console.log(this.personalInfo.value);
    this.personalInfo.patchValue({ gender: i });
  }

  submitPersonal(): void {
    if (this.personalInfo.status !== 'INVALID') {
      this.message = null;
      console.log(this.personalInfo.status);
      this.inputCounter = 'address';
    } else {
      console.log(this.personalInfo);
      this.message = 'Error Submitting. Please enter valid data.';
    }
  }
  submitAddress(): void {
    if (
      this.currentAddress.status !== 'INVALID' &&
      this.permanentAddress.value !== 'INVALID'
    ) {
      this.inputCounter = 'contact';
    } else {
      this.message = 'Error Submitting. Please enter valid data.';
    }
  }
  submitContact(): void {
    if (
      this.personalInfo.status !== 'INVALID' &&
      this.currentAddress.status !== 'INVALID' &&
      this.permanentAddress.status !== 'INVALID' &&
      this.myContact.status !== 'INVALID'
    ) {
      const {
        firstName,
        lastName,
        DOB,
        gender,
        department,
        designation,
      } = this.personalInfo.value;

      const {
        streetAddress,
        city,
        state,
        country,
        pinCode,
      } = this.currentAddress.value;

      const {
        streetAddress: streetAddress2,
        city: city2,
        state: state2,
        country: country2,
        pinCode: pinCode2,
      } = this.permanentAddress.value;

      const {
        homePhone,
        workEmail,
        workPhone,
        personalEmail,
      } = this.myContact.value;

      this.newEmployee = {
        employeeId: Math.floor(Math.random() * 160000).toString(),
        profilePhoto: 'https://source.unsplash.com/random/64x64',
        firstName,
        lastName,
        DOB,
        gender,
        department,
        designation,
        contact: {
          phone: {
            home: homePhone,
            work: workPhone,
          },
          email: {
            personal: personalEmail,
            work: workEmail,
          },
        },
        address: {
          current: {
            streetAddress,
            city,
            state,
            country,
            pinCode,
          },
          permanent: {
            streetAddress: streetAddress2,
            city: city2,
            state: state2,
            country: country2,
            pinCode: pinCode2,
          },
        },
      };
      this.dataService.sharedData.push(this.newEmployee);
      this.router.navigate(['/home']);
    } else {
      console.log('imran');
    }
  }
}
