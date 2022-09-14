import { CRUDRepository } from '../infrastructure';
import { Customer } from '../../../core';

export default interface CustomerRepository
  extends CRUDRepository<Customer, string> {}
