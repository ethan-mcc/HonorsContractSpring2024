import express from 'express';
import bodyParser from 'body-parser';
import { database } from './database';
import routes from './routes';

/**
 * Class representing the Express application.
 */
class ExpressApp {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.configureMiddleware();
        this.setupRoutes();
    }

    /**
     * Configure middleware.
     */
    configureMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    /**
     * Setup routes.
     */
    setupRoutes() {
        this.app.use('/api', routes);
    }

    /**
     * Start the server.
     */
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

// Create an instance of the ExpressApp class
const expressApp = new ExpressApp();

// Start the server
expressApp.startServer();
