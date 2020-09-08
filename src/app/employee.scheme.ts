export default interface EmployeeScheme {
  employeeId: string;
  profilePhoto: string;
  firstName: string;
  lastName?: string;
  DOB: string;
  gender: string;
  designation: string;
  department: string;
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
      city: string;
      state: string;
      country: string;
      pinCode: number;
    };
  };
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
