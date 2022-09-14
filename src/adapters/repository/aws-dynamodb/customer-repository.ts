import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { Customer } from '../../../core';
import AbstractAWSDynamoDBRepository from './abstract-repository';

export default class CustomerRepository extends AbstractAWSDynamoDBRepository<
  Customer,
  string
> {
  constructor(docClient: DocumentClient, tableName: string) {
    super(docClient, tableName);
  }
}
