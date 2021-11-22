import express from 'express';

import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';


const router = express.Router();

//get all users
router.get('/', getUsers);

//create users
router.post('/', createUser);

//get user by id
router.get('/:id', getUser);

//delete user
router.delete('/:id', deleteUser);

//update user
router.patch('/:id', updateUser);

export default router;