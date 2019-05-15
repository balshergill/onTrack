const { fetchUsers } = require("../models/userModels")

exports.getUser = (req, res, next) => {
    fetchUsers(req.params, req.query), (err, user) => {
        if (err) throw err;
        res.status(200).json(user);
      };
}