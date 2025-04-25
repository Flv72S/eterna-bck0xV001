import express from 'express';
import {
  register,
  login,
  verifyOtp,
  loginViaNFC,
} from '../controllers/authController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/login/nfc', loginViaNFC);
router.post('/verify-otp', verifyOtp);

export default router; 