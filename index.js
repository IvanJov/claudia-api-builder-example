var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.get('/hello', function () {
  'use strict';
  return 'Hello World';
});

api.get('/echo', function (request) {
  'use strict';
  return request;
});

api.get('/greet', function (request) {
  'use strict';
  return 'My name is ' + request.queryString.name;
});

api.get('/people/{name}', function (request) {
  'use strict';
  return request.pathParams.name + ' is ' + superb();
});

api.get('/json', function (request) {
  'use strict';
  return {
    name: 'John',
    surname: 'Doe',
    email: 'johndoe@example.com'
  };
});

api.post('/echo', function (request) {
  'use strict';
  return request.body;
});