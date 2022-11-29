// import { expect } from 'chai';
import * as handlerMock from './handler.mock';
// import sinon from 'sinon';
import { create } from '../../../../src/adapters/controllers/aws-lambda/handler';

describe('Create [POST]', () => {
  it('Should not throw exception', async () => {
    const createEventMock = handlerMock.createEventMock;
    const createContextMock = handlerMock.createContextMock;

    const response = await create(createEventMock, createContextMock, null);
    console.log(`RESPONSE => ${response}`);

    // const findNearestStoresHandler: FindNearestStoresHandler =
    //   new FindNearestStoresHandler(
    //     new MockController(logger),
    //     new MockResponseMapper(),
    //     logger,
    //     apiVersion
    //   );
    // const queryParams = {
    //   latitude: '1.0',
    //   longitude: '1.0',
    //   limit: 5,
    // };
    // expect(findNearestStoresHandler.endpoint).toEqual('/v1/stores');
    // expect(() => {
    //   findNearestStoresHandler.validateRequest(queryParams);
    // }).not.toThrow(BadRequestException);
  });
});
