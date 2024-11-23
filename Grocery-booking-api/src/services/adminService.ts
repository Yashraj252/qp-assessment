import { GroceryItem } from '../entities/GroceryItem';
import { dataSource } from '../index';

export const addItem = async (name: string, price: number, quantity: number) => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);
  const newItem = groceryItemRepository.create({ name, price, quantity });
  return await groceryItemRepository.save(newItem);
};

export const viewItems = async () => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);
  return await groceryItemRepository.find();
};

export const updateItem = async (id: number, name: string, price: number, quantity: number) => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);

  const item = await groceryItemRepository.findOne({ where: { id } });
  if (!item) {
    throw new Error('Item not found');
  }

  item.name = name;
  item.price = price;
  item.quantity = quantity;
  return await groceryItemRepository.save(item);
};

export const removeItem = async (id: number) => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);

  const item = await groceryItemRepository.findOne({ where: { id } });
  if (!item) {
    throw new Error('Item not found');
  }

  await groceryItemRepository.remove(item);
};

export const manageInventory = async (id: number, quantity: number) => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);

  const item = await groceryItemRepository.findOne({ where: { id } });
  if (!item) {
    throw new Error('Item not found');
  }

  item.quantity = quantity;
  return await groceryItemRepository.save(item);
};
