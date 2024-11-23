import { MoreThan } from 'typeorm';
import { GroceryItem } from '../entities/GroceryItem';
import { dataSource } from '../index';

export const viewItems = async () => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);
  return await groceryItemRepository.find({ where: { quantity: MoreThan(0) } });
};

export const bookItems = async (items: { id: number, quantity: number }[]) => {
  const groceryItemRepository = dataSource.getRepository(GroceryItem);

  const bookedItems = [];

  for (const { id, quantity } of items) {
    const item = await groceryItemRepository.findOne({ where: { id } });
    if (!item || item.quantity < quantity) {
      throw new Error(`Insufficient stock for item ID: ${id}`);
    }

    item.quantity -= quantity;
    await groceryItemRepository.save(item);
    bookedItems.push({ id: item.id, name: item.name, quantity });
  }

  return bookedItems;
};
