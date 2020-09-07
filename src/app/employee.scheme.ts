export default interface EmployeeScheme {
  employeeId: string;
  firstName: string;
  lastName?: string;
  profilePhoto: string;
  DOB: string;
  gender: string;
  address: {
    current: {
      streetAddress: string;
      city: string;
      state: string;
      country: string;
      pinCode: number;
    };
    permanent?: {
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
    phone: {
      home?: string;
      work?: string;
    };
    email: {
      personal?: string;
      work?: string;
    };
  };
}
