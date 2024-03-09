import express from 'express';
import { BaseAdapter } from './database';
import { ItemModel } from './models';

const router = express.Router();

// Create an adapter for the 'Item' entity
const itemAdapter = new BaseAdapter(ItemModel);

/**
 * @route GET /api/items
 * @desc Get all items.
 * @access Public
 */
router.get('/items', async (req, res) => {
    try {
        const items = await itemAdapter.getAll();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @route POST /api/items
 * @desc Create a new item.
 * @access Public
 */
router.post('/items', async (req, res) => {
    const { name, description } = req.body;

    try {
        const newItem = await itemAdapter.create({ name, description });
        res.json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
