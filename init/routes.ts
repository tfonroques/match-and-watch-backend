import express from 'express';

const users = require('../routes/user.route');

module.exports = (app: any): void => {
  app.use(express.json());
  app.use('/api/users', users);
};
