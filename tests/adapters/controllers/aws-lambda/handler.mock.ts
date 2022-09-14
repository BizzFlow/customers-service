export const findOne = {
  _id: '5dff58da85eb210f0aac43af',
  name: '深入浅出Node.js',
  id: 25768396,
  createdAt: '2019-12-22T11:51:54.857Z',
  __v: 0,
};

export const castError = new Error(
  'Cast to number failed for value "NaN" at path "id" for model "Users"'
);

export const find = [
  {
    _id: '5dff58da85eb210f0aac43af',
    name: '深入浅出Node.js',
    id: 25768396,
    createdAt: '2019-12-22T11:51:54.857Z',
    __v: 0,
  },
  {
    _id: '5e0188f53877986a548aa6f4',
    name: '你不知道的JavaScript（上卷）',
    id: 26351021,
    createdAt: '2019-12-24T03:41:41.791Z',
    __v: 0,
  },
];

export const findError = new Error('test find error');

export const create = {
  _id: '5eb0023e6460b01a9461c8fc',
  name: 'Node.js：来一打 C++ 扩展',
  id: 30247892,
  createdAt: '2020-05-04T11:53:34.056Z',
  __v: 0,
};

export const createError = new Error(
  'E11000 duplicate key error collection: study1.users index: id_1 dup key: { id: 30247892 }'
);

export const update = {
  _id: '5eb0023e6460b01a9461c8fc',
  name: 'Node.js：来一打 C++ 扩展',
  id: 30247892,
  createdAt: '2020-05-04T11:53:34.056Z',
  __v: 0,
  description:
    '阅读《Node.js：来一打 C++ 扩展》，相当于同时学习Chrome V8 开发、libuv 开发以及 Node.js 的原生 C++ 扩展开发知识，非常值得！',
};

export const deleteOne = {
  n: 1,
  opTime: {
    ts: '6822972891668152321',
    t: 29,
  },
  electionId: '7fffffff000000000000001d',
  ok: 1,
  $clusterTime: {
    clusterTime: '6822972891668152321',
    signature: {
      hash: 'ZEDvpLVNn/eA6weZEWboNr0H7o8=',
      keyId: '6772591495061962755',
    },
  },
  operationTime: '6822972891668152321',
  deletedCount: 1,
};

export const deletedCount = {
  n: 0,
  opTime: {
    ts: '6822975382749184001',
    t: 29,
  },
  electionId: '7fffffff000000000000001d',
  ok: 1,
  $clusterTime: {
    clusterTime: '6822975382749184001',
    signature: {
      hash: '6s7HFnoM7FGe1esPR/qwh+Et9+0=',
      keyId: '6772591495061962755',
    },
  },
  operationTime: '6822975382749184001',
  deletedCount: 0,
};

export const createEventMock = {
  resource: '/customers',
  path: '/dev/customers',
  httpMethod: 'POST',
  headers: {
    Accept: '*/*',
    'CloudFront-Forwarded-Proto': 'https',
    'CloudFront-Is-Desktop-Viewer': 'true',
    'CloudFront-Is-Mobile-Viewer': 'false',
    'CloudFront-Is-SmartTV-Viewer': 'false',
    'CloudFront-Is-Tablet-Viewer': 'false',
    'CloudFront-Viewer-ASN': '8075',
    'CloudFront-Viewer-Country': 'NL',
    'content-type': 'application/json',
    Host: 'customers.api.bizzflow.link',
    'User-Agent': 'curl/7.68.0',
    Via: '2.0 415cafe4893fa18caeab8a2e966de6c0.cloudfront.net (CloudFront)',
    'X-Amz-Cf-Id': 'iQHAjaGT2fMazaB0ML0cgTVqueBx006iSg9lxKQjPXJlbuHZucdtEQ==',
    'X-Amzn-Trace-Id': 'Root=1-6321e76e-584d6f305e6ce9b2033b9294',
    'X-Forwarded-For': '20.16.53.248, 70.132.49.153',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https',
  },
  multiValueHeaders: {
    Accept: ['*/*'],
    'CloudFront-Forwarded-Proto': ['https'],
    'CloudFront-Is-Desktop-Viewer': ['true'],
    'CloudFront-Is-Mobile-Viewer': ['false'],
    'CloudFront-Is-SmartTV-Viewer': ['false'],
    'CloudFront-Is-Tablet-Viewer': ['false'],
    'CloudFront-Viewer-ASN': ['8075'],
    'CloudFront-Viewer-Country': ['NL'],
    'content-type': ['application/json'],
    Host: ['customers.api.bizzflow.link'],
    'User-Agent': ['curl/7.68.0'],
    Via: ['2.0 415cafe4893fa18caeab8a2e966de6c0.cloudfront.net (CloudFront)'],
    'X-Amz-Cf-Id': ['iQHAjaGT2fMazaB0ML0cgTVqueBx006iSg9lxKQjPXJlbuHZucdtEQ=='],
    'X-Amzn-Trace-Id': ['Root=1-6321e76e-584d6f305e6ce9b2033b9294'],
    'X-Forwarded-For': ['20.16.53.248, 70.132.49.153'],
    'X-Forwarded-Port': ['443'],
    'X-Forwarded-Proto': ['https'],
  },
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  pathParameters: {},
  stageVariables: null,
  requestContext: {
    resourceId: 'ppcj38',
    resourcePath: '/customers',
    httpMethod: 'POST',
    extendedRequestId: 'YdEZXGKUFiAFdrQ=',
    requestTime: '14/Sep/2022:14:38:38 +0000',
    path: '/dev/customers',
    accountId: '491406350155',
    protocol: 'HTTP/1.1',
    stage: 'dev',
    domainPrefix: 'customers',
    requestTimeEpoch: 1663166318982,
    requestId: '68dbfcd1-c288-4ac9-9d4b-ec36d50e0965',
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      sourceIp: '20.16.53.248',
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      userAgent: 'curl/7.68.0',
      user: null,
    },
    domainName: 'customers.api.bizzflow.link',
    apiId: 'g6icggrxqc',
  },
  body: {
    key1: 'value1',
    key2: 'value2',
  },
  isBase64Encoded: false,
  rawBody: '{"key1":"value1", "key2":"value2"}',
};

export const createContextMock = {
  callbackWaitsForEmptyEventLoop: true,
  functionVersion: '$LATEST',
  functionName: 'customers-service-dev-create',
  memoryLimitInMB: '128',
  logGroupName: '/aws/lambda/customers-service-dev-create',
  logStreamName: '2022/09/14/[$LATEST]e92e047f16e4457696d40d4ba42c2478',
  invokedFunctionArn:
    'arn:aws:lambda:eu-central-1:491406350155:function:customers-service-dev-create',
  awsRequestId: '1de13371-785a-4e82-b527-bcf20ad91603',
};

export const findOneEventMock = {
  resource: '/customers/{id}',
  path: '/dev/customers/123',
  httpMethod: 'GET',
  headers: {
    Accept: '*/*',
    'CloudFront-Forwarded-Proto': 'https',
    'CloudFront-Is-Desktop-Viewer': 'true',
    'CloudFront-Is-Mobile-Viewer': 'false',
    'CloudFront-Is-SmartTV-Viewer': 'false',
    'CloudFront-Is-Tablet-Viewer': 'false',
    'CloudFront-Viewer-ASN': '8075',
    'CloudFront-Viewer-Country': 'NL',
    'content-type': 'application/json',
    Host: 'customers.api.bizzflow.link',
    'User-Agent': 'curl/7.68.0',
    Via: '2.0 8583f64172baf458ac5712a4d1815fec.cloudfront.net (CloudFront)',
    'X-Amz-Cf-Id': 'lp_G2NoXXL9D7uXDY6KO9e44QvLd3phY06ucdwmMfqT_drRE51VttQ==',
    'X-Amzn-Trace-Id': 'Root=1-6321e76e-6ec91ce83a33eacf67c1721f',
    'X-Forwarded-For': '20.16.53.248, 70.132.49.139',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https',
  },
  multiValueHeaders: {
    Accept: ['*/*'],
    'CloudFront-Forwarded-Proto': ['https'],
    'CloudFront-Is-Desktop-Viewer': ['true'],
    'CloudFront-Is-Mobile-Viewer': ['false'],
    'CloudFront-Is-SmartTV-Viewer': ['false'],
    'CloudFront-Is-Tablet-Viewer': ['false'],
    'CloudFront-Viewer-ASN': ['8075'],
    'CloudFront-Viewer-Country': ['NL'],
    'content-type': ['application/json'],
    Host: ['customers.api.bizzflow.link'],
    'User-Agent': ['curl/7.68.0'],
    Via: ['2.0 8583f64172baf458ac5712a4d1815fec.cloudfront.net (CloudFront)'],
    'X-Amz-Cf-Id': ['lp_G2NoXXL9D7uXDY6KO9e44QvLd3phY06ucdwmMfqT_drRE51VttQ=='],
    'X-Amzn-Trace-Id': ['Root=1-6321e76e-6ec91ce83a33eacf67c1721f'],
    'X-Forwarded-For': ['20.16.53.248, 70.132.49.139'],
    'X-Forwarded-Port': ['443'],
    'X-Forwarded-Proto': ['https'],
  },
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  pathParameters: {
    id: '123',
  },
  stageVariables: null,
  requestContext: {
    resourceId: '7wv2i3',
    resourcePath: '/customers/{id}',
    httpMethod: 'GET',
    extendedRequestId: 'YdEZQF4xliAFiuA=',
    requestTime: '14/Sep/2022:14:38:38 +0000',
    path: '/dev/customers/123',
    accountId: '491406350155',
    protocol: 'HTTP/1.1',
    stage: 'dev',
    domainPrefix: 'customers',
    requestTimeEpoch: 1663166318236,
    requestId: 'e48a9d6b-e2f2-4e60-b346-e9de958ded34',
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      sourceIp: '20.16.53.248',
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      userAgent: 'curl/7.68.0',
      user: null,
    },
    domainName: 'customers.api.bizzflow.link',
    apiId: 'g6icggrxqc',
  },
  body: null,
  isBase64Encoded: false,
  rawBody: null,
};

export const findOneContextMock = {
  callbackWaitsForEmptyEventLoop: true,
  functionVersion: '$LATEST',
  functionName: 'customers-service-dev-get',
  memoryLimitInMB: '128',
  logGroupName: '/aws/lambda/customers-service-dev-get',
  logStreamName: '2022/09/14/[$LATEST]862f4f1c04b9409984a4a1647c9aac1e',
  invokedFunctionArn:
    'arn:aws:lambda:eu-central-1:491406350155:function:customers-service-dev-get',
  awsRequestId: '2b685635-8a3e-4f61-b496-2f7b51afa250',
};
