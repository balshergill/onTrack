const chai = require('chai');
const { expect } = require('chai');
const supertest = require('supertest');
const App = require('../App');
const request = supertest(App);

describe('/journey', () => {
  it('GET status 200 and array of objects', () => {
    return request
      .get('/journey?from=MCV&to=HFX')
      .expect(200)
      .then(({ body }) => {
        console.log(body.trainServices[0]);
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
