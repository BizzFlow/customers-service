/**
Header
Content-Type: application/json

{
  firstName: "Firstname",
  lastName: "Lastname",
  email: "fulano@gmail.com",
  description: "Description"
}
*/

export interface CreateCustomerEvent {
  firstName: string;
  lastName: string;
  email: string;
  description?: string;
}
