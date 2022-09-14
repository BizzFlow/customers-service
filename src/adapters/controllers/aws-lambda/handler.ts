import dotenv from 'dotenv';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { genSaltSync, hashSync } from 'bcryptjs';
import crypto from 'crypto';

import middleware from './middleware';

const dotenvPath = path.join(
  __dirname,
  '../',
  `config/.env.${process.env.NODE_ENV}`
);
dotenv.config({
  path: dotenvPath,
});

import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from 'aws-lambda';

import formatJSONResponse from './formatJSONResponse';
import AddCustomerUseCase from '../../../usecases/customers/addCustomer';
import CustomerRepository from '../../repository/aws-dynamodb/customer-repository';
import createDynamoDBClient from '../../repository/aws-dynamodb/dynamodb';
import { Customer } from '../../../core';
import { CreateCustomerEvent } from '../models/create-customer-event';

export const create: Handler = middleware(
  async (
    event: APIGatewayEvent,
    _context: Context
  ): Promise<APIGatewayProxyResult> => {
    const addCustomerUseCase = new AddCustomerUseCase(
      new CustomerRepository(
        createDynamoDBClient(),
        process.env.CUSTOMERS_TABLE
      )
    );

    const createEvent: CreateCustomerEvent = JSON.parse(
      event.body
    ) as CreateCustomerEvent;

    const customerResponse = await addCustomerUseCase.execute({
      customer: mapEventToType(createEvent),
    });
    return formatJSONResponse(201, customerResponse);
  }
);

export const findOne: Handler = middleware(
  async (
    event: APIGatewayEvent,
    _context: Context
  ): Promise<APIGatewayProxyResult> => {
    // const findCustomerUseCase = new AddCustomerUseCase(
    //   new CustomerRepository(
    //     createDynamoDBClient(),
    //     process.env.CUSTOMERS_TABLE
    //   )
    // );
    const customerResponse = {
      id: 'id-customer',
      name: 'name-customer',
    };
    return formatJSONResponse(201, customerResponse);
  }
);

const mapEventToType = (event: CreateCustomerEvent): Customer => {
  const password = crypto.randomBytes(32).toString('hex');
  const salt = genSaltSync(10);
  const digest = hashSync(password, salt);

  return {
    customerId: uuidv4(),
    profile: {
      firstName: event.firstName,
      lastName: event.lastName,
      description: event.description,
      email: event.email,
    },
    active: true,
    createdAt: new Date().toISOString(),
    userId: event.userId,
  } as Customer;
};
