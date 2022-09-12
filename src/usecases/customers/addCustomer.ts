import { ErrorSeverity, UseCaseRequest } from '../ports/infrastructure';
import { Customer } from '../../core';
import { UseCase } from '../ports/infrastructure';
import CustomerRepository from '../ports/repository/customerRepository';
import { UseCaseError } from '../ports/infrastructure/errors/useCaseError';

export default class AddCustomerUseCase implements UseCase {
  constructor(private repository: CustomerRepository) {}

  async execute(input: UseCaseRequest): Promise<Customer> {
    try {
      const customer: Customer = input.customer;
      return await this.repository.add(customer);
    } catch (error) {
      throw new UseCaseError(
        {
          code: '1' /**  BUSINESS ERROR CODE, MAPPED SOMEWHERE, LIKE CONFLUENCE... */,
          message: 'An error ocurred while adding a customer',
          source: 'AddCustomerUseCase.execute',
          severity: ErrorSeverity.ERROR,
          error,
        },
        error
      );
    }
  }
}
