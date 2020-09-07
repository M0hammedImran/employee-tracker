import { Component, OnInit } from '@angular/core';
import EmployeeScheme from '../employee.scheme';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  employees: EmployeeScheme[] = [
    {
      employeeId: '11',
      firstName: 'Evert',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '05-07-1999',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
        work: '314 - 334 - 4614',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Gust',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '33',
      firstName: 'Vilma',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Assistant Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Giuseppe',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '66',
      firstName: 'Imran',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Evert',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '05-07-1999',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Evert',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '05-07-1999',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
    {
      employeeId: '11',
      firstName: 'Ray',
      profilePhoto:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
      DOB: '12-05-2000',
      gender: 'male',
      address: {
        home: {
          streetAddress: 'string',
          city: 'North Jayme',
          state: 'Maryland',
          country: 'Berkshire',
          pinCode: 73487,
        },
      },
      designation: 'Manager',
      department: 'Human Resource',
      contact: {
        home: '314 - 334 - 4613',
      },
    },
  ];
  searchResult: EmployeeScheme[];
  searchTerm: string;
  searchFilter = 'firstName';
  showResult = false;
  inputHandler($event): void {
    console.log($event.target.value);
  }
  search(): void {
    this.showResult = false;
    this.searchResult = this.employees.filter((emp) => {
      return emp[this.searchFilter].toString().toLowerCase() ===
        this.searchTerm.toLowerCase()
        ? emp
        : null;
    });
    this.showResult = this.searchResult ? true : false;
  }

  ngOnInit(): void {}
}
