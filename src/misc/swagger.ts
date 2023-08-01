import {Express, Request, Response} from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import simpleLogger from '../misc/SimpleLogger';
/*
const log = simpleLogger.initializeLogging();
const swaggerDefinitions = {
    openapis: '3.0.0',
    info: {
        title: 'Todo Rest Api with TypeScript and MySql',
        version: '1.0.0'
    },
};
const options = {
    swaggerDefinitions,
    apis: ['./src/routes/routes.ts']
}
    


const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app: Express, port: number) {
// Swagger page
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Docs in JSON format
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    log.info('Docs available at http://localhost:${port}/docs')
}

export default swaggerDocs;
*/