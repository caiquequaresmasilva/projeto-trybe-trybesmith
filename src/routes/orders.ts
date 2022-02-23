import { Router } from 'express';
import rescue from 'express-rescue';
import Order from '../controllers/Order';

const router = Router();

router.post('/', rescue(Order.validateOrder), rescue(Order.create));

export default router;