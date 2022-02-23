import { Router } from 'express';
import rescue from 'express-rescue';
import Product from '../controllers/Product';

const router = Router();

router.post('/', rescue(Product.validateProd), rescue(Product.create));
router.get('/', rescue(Product.getAll));

export default router;