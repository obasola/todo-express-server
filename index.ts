import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import SimpleLogger from './src/misc/SimpleLogger';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

dotenv.config();
const app = express();
const port = 9001; //process.env.port;
const log = SimpleLogger.initializeLogging();

app.get('/', (req,res) => {
    res.send(' Express + Typescript server ');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// Swagger declaration

const swaggerDefinition = {
    openapis: '3.0.0',
    info: {
        title: 'Todo Rest Api with TypeScript and MySql',
        version: '1.0.0'
    },
};
const options = {
    swaggerDefinition,
    apis: ['./src/routes/routes.ts']
}
    
const swaggerSpec = swaggerJsDoc(options);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec) );

// start server using: node index.js :

