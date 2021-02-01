import User from '../models/user.model';

const getUsers = async (req: any, res: any): Promise<void> => {
  const users = await User.find({}).sort('name');
  res.send(users);
};

const addUser = async (req: any, res: any): Promise<void> => {
  const user = new User({
    name: req.body.name
  });

  const result = await user.save();
  res.send(result);
};

export { getUsers, addUser };
