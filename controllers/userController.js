const { fetchUserInfo } = require('../models/userModels');

exports.getUser = (req, res, next) => {
  fetchUserInfo(req.body).then(resp => {
    res.status(200).json(resp);
  });
};
