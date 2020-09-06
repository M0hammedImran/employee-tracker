export default interface EmployeeScheme {
  employeeId: string;
  firstName: string;
  lastName?: string;
  profilePhoto: string;
  DOB: string;
  gender: string;
  address: {
    home: {
      streetAddress: string;
      city: string;
      state: string;
      country: string;
      pinCode: number;
    };
    work?: {
      streetAddress: string;
      City: string;
      State: string;
      Country: string;
      pinCode: number;
    };
  };
  designation: string;
  department: string;
  contact: {
    home?: string;
    work?: string;
  };
}
