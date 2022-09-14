export default interface Customer {
  customerId: string;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    description?: string;
  };
  active: boolean;
  createdAt: string;
}
