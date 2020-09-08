import { Injectable } from '@angular/core';
import EmployeeScheme from './employee.scheme';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharedData: EmployeeScheme[] = [
    {
      employeeId: '11',
      firstName: 'Evert',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: 'Mon Sep 07 1999 16:47:09 GMT+0530 (India Standard Time)',
      gender: 'male',
      address: {
        current: {
          streetAddress: '"string"',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        phone: {
          home: '314 - 334 - 4613',
          work: '314 - 334 - 4614',
        },
        email: {
          personal: 'mm@yy.co',
        },
      },
    },
  ];
  constructor() {}
}
