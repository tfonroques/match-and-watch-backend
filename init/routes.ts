import express from "express"

const users = require("../routes/user.route");

module.exports = function (app: any) {
  app.use(express.json());
  app.use("/api/users", users);
};