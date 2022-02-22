import { Router } from 'express';
import rescue from 'express-rescue';
import User from '../controllers/users';

const router = Router();

router.post('/', rescue(User.validateUser), rescue(User.create));

export default router;