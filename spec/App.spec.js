const chai = require('chai');
const { expect } = require('chai');
const supertest = require('supertest');
const App = require('../App');
const request = supertest(App);
const db = require('../db/connection');

describe('/journey', () => {
  after(() => {
    db.destroy();
  });
  it('GET status 200 and object of objects', () => {
    return request
      .get('/journey?from=YRK&to=MIA')
      .expect(200)
      .then(({ body }) => {
        expect(body).to.be.an('Object');
        expect(body).to.contain.keys('liveResult', 'result');
        expect(body.result).to.be.an('Array');
        expect(body.liveResult).to.be.an('Object');
        expect(body.result[0].rows[0]['dep minutes late']).to.not.equal(null);
        // console.log(body.result[2], '<<< body');
      });
  });
});

// describe('/fastest', () => {
//   it('GET status 200', () => {
//     return request
//       .get('/journey/f?from=LDS&to=YRK')
//       .expect(200)
//       .then(({ body }) => {
//         console.log(body);
//       });
//   });
// });

// describe('/next', () => {
//   it('GET status 200', () => {
//     return request
//       .get('/journey/n?from=LDS&to=YRK')
//       .expect(200)
//       .then(({ body }) => {
//         console.log(body);
//       });
//   });
// });
