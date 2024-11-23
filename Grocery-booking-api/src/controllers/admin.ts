import { Request, Response } from 'express';
import {
  addItem,
  viewItems,
  updateItem,
  removeItem,
  manageInventory
} from '../services/adminService';

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

// Add a new grocery item
export const addItemController = async (req: Request, res: Response) => {
  try {
    const { name, price, quantity } = req.body;
    const newItem = await addItem(name, price, quantity);
    res.status(201).send(newItem);
  } catch (error) {
    if (isError(error)) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

// View all grocery items
export const viewItemsController = async (req: Request, res: Response) => {
  try {
    const items = await viewItems();
    res.status(200).send(items);
  } catch (error) {
    if (isError(error)) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

// Update an existing grocery item
export const updateItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const updatedItem = await updateItem(parseInt(id), name, price, quantity);
    res.status(200).send(updatedItem);
  } catch (error) {
    if (isError(error)) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

// Remove a grocery item from the system
export const removeItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await removeItem(parseInt(id));
    res.status(204).send();
  } catch (error) {
    if (isError(error)) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};

// Manage inventory levels of grocery items
export const manageInventoryController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const updatedItem = await manageInventory(parseInt(id), quantity);
    res.status(200).send(updatedItem);
  } catch (error) {
    if (isError(error)) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
};
