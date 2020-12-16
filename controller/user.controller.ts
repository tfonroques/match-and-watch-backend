export {};
const { User } = require("../models/user.model");

module.exports.getUsers = async (req: any, res: any) => {
  const users = await User.find({}).sort("name");
  res.send(users);
};

module.exports.addUser = async (req: any, res: any) => {
  const user = new User({
    name: req.body.name,
  });

  const result = await user.save();
  res.send(result);
};
