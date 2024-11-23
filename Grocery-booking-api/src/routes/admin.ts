import { Router } from 'express';
import { addItemController, viewItemsController, updateItemController, removeItemController, manageInventoryController } from '../controllers/admin';

const router = Router();

router.post('/items', addItemController);
router.get('/items', viewItemsController);
router.put('/items/:id', updateItemController);
router.delete('/items/:id', removeItemController);
router.patch('/items/:id/inventory', manageInventoryController);

export default router;
