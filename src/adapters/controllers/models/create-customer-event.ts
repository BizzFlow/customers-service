/**
Header
Content-Type: application/json

{
  firstName: "Firstname",
  lastName: "Lastname",
  email: "fulano@gmail.com",
  description: "Description",
  userId: "adac7011-8b75-427e-8a34-07f066f65369"
}
*/

export interface CreateCustomerEvent {
  firstName: string;
  lastName: string;
  email: string;
  description?: string;
  userId: string;
}
