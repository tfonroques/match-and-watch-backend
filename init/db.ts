import config from 'config';
import mongoose from 'mongoose';

module.exports = () => {
  const password = config.get('password');
  const dbName = config.get('dbName');
  const mongoConnectionString = `mongodb+srv://tfonroques:${password}@cluster0.sf7kp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Successfully connected to ${dbName} !`))
    .catch((err) => console.error(err));
};
