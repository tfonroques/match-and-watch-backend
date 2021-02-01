import express from 'express';
import { getUsers, addUser } from '../controller/user.controller';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);

module.exports = router;
