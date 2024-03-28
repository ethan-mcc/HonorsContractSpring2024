import express from 'express';
import bodyParser from 'body-parser';
import routes from "./routes.js";
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';


/**
 * Class representing the Express application.
 */
class ExpressApp {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.configureMiddleware();
        this.setupRoutes();
        this.serveReactApp();
    }

    /**
     * Configure middleware.
     */
    configureMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }


    /**
     * Setup api routes.
     */
    setupRoutes() {
        // Api route
        this.app.use('/api', routes);
    }

    /**
     * Serve the React application build folder.
     */
    serveReactApp() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        // Serve static files from the React build folder
        this.app.use(express.static(path.join(__dirname, '/react-movie-ui/build')));

        // For any other requests, serve the React app
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '/react-movie-ui/build', 'index.html'));
        });
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
