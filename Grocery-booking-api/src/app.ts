import express from 'express';
import { GroceryItem } from './entities/GroceryItem';
import adminRoutes from './routes/admin';
import userRoutes from './routes/user';
import { dataSource } from './index';

const app = express();
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

export default app;
