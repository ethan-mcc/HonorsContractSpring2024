import mongoose from 'mongoose';

/**
 * Class representing the Database connection.
 */
class Database {
    constructor() {
        this.connect();
    }

    /**
     * Connect to MongoDB.
     * @returns {Promise} A promise representing the connection process.
     */
    connect() {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
        return mongoose.connect(mongoURI);
    }
}

/**
 * Abstract adapter for a generic entity in the database.
 */
class BaseAdapter {
    constructor(model) {
        this.model = model;
    }

    /**
     * Get all items.
     * @returns {Promise<Array>} A promise that resolves to an array of items.
     */
    getAll() {
        return this.model.find();
    }

    /**
     * Create a new item.
     * @param {Object} data - The data to create the item.
     * @returns {Promise<Object>} A promise that resolves to the created item.
     */
    create(data) {
        return this.model.create(data);
    }
}

// Export the Database class for connecting to the database
export const database = new Database();

// Export the BaseAdapter class for creating entity-specific adapters
export { BaseAdapter };
