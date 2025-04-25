import { Router } from 'express';
import { body } from 'express-validator';
import { register, login, verifyToken } from '../controllers/auth';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Inserisci un indirizzo email valido'),
    body('name').notEmpty().withMessage('Il nome è obbligatorio'),
    body('surname').notEmpty().withMessage('Il cognome è obbligatorio'),
    body('phone').notEmpty().withMessage('Il numero di telefono è obbligatorio'),
    body('pin')
      .isLength({ min: 6, max: 6 })
      .isNumeric()
      .withMessage('Il PIN deve essere di 6 cifre numeriche'),
    body('version').isIn(['FREE', 'PREMIUM']).withMessage('Versione non valida'),
    body('seriale_gioiello')
      .optional()
      .isString()
      .matches(/^[0-9A-F]{8}$/)
      .withMessage('Il seriale del gioiello deve essere un codice esadecimale di 8 caratteri')
  ],
  validateRequest,
  register
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Inserisci un indirizzo email valido'),
    body('pin')
      .isLength({ min: 6, max: 6 })
      .isNumeric()
      .withMessage('Il PIN deve essere di 6 cifre numeriche')
  ],
  validateRequest,
  login
);

router.post(
  '/verify-token',
  [
    body('token').notEmpty().withMessage('Il token è obbligatorio')
  ],
  validateRequest,
  verifyToken
);

export { router }; 