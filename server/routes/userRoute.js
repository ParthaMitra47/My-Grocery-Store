import express from 'express';
import { login, register } from '../controllers/userController.js';
const userRouter = express.Router();


//test with postman api
userRouter.post('/register', register)
userRouter.post('/login', login)
export default userRouter