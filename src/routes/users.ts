import { Router } from 'express';
import User from '../controllers/users';

const router = Router();

router.post('/', User.create);

export default router;