import { Router } from 'express';
import { viewItemsController, bookItemsController } from '../controllers/user';

const router = Router();

router.get('/items', viewItemsController);
router.post('/items/book', bookItemsController);

export default router;
