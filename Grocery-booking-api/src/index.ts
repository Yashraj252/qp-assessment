import 'reflect-metadata';
import { DataSource } from 'typeorm';
import app from './app';
import { GroceryItem } from './entities/GroceryItem';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [GroceryItem],
  synchronize: true,
});

dataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => console.error(error));
