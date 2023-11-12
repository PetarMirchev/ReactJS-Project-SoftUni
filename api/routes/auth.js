import express from 'express';
import { register, login } from '../controllers/auth.js';

const router = express.Router();


//http://localhost:8800/api/auth/register
router.post('/register', register);

//http://localhost:8800/api/auth/login
router.post('/login', login);

// //http://localhost:8800/api/auth/logout
// router.get('/logout', logout);





export default router;