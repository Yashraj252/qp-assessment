import { Request, Response } from 'express';
import { viewItems, bookItems } from '../services/userService';

// View all available grocery items
export const viewItemsController = async (req: Request, res: Response) => {
  try {
    const items = await viewItems();
    res.status(200).send(items);
  } catch (error) {
    const err = error as Error;  // Type assertion
    res.status(500).send({ error: err.message });
  }
};

// Book multiple grocery items in a single order
export const bookItemsController = async (req: Request, res: Response) => {
  try {
    const { items } = req.body; // Expecting an array of { id, quantity } pairs
    const bookedItems = await bookItems(items);
    res.status(200).send(bookedItems);
  } catch (error) {
    const err = error as Error;  // Type assertion
    res.status(500).send({ error: "err.message" });
  }
};
