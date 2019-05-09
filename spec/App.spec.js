const chai = require('chai');
const { expect } = require('chai');
const supertest = require('supertest');
const App = require('../App');
const request = supertest(App);

describe('/journey', () => {
  it('GET status 200 and array of objects', () => {
    return request
      .get('/journey?from=LDS&to=YRK')
      .expect(200)
      .then(({ body }) => {
        console.log(body);
      });
  });
});
