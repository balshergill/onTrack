let users = [
  {
    username: 'test1',
    password: 'password'
  },
  {
    username: 'Tom',
    password: 'pword'
  },
  {
    username: 'Luke',
    password: 'Luke'
  }
];

const fakeAsync = async stallTime => {
  await new Promise(resolve => setTimeout(resolve, stallTime));
};

exports.fetchUserInfo = async req => {
  let retObj = { verified: false };
  for (let i = 0; users[i].username === req.username; i++) {
    if (retObj.verified === false) {
      if (
        users[i].username === req.username &&
        users[i].password === req.password
      ) {
        retObj.verified = true;
        return retObj;
      }
    }
  }
  await fakeAsync(100);
  return retObj;
};
