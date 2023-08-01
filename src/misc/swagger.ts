import {Express, Request, Response} from 'express';
import SwaggerJsDoc from 'swagger-jsdoc';
import SwaggerUiExpress from 'swagger-ui-express';
import simpleLogger from '../misc/SimpleLogger';

const options: SwaggerJsDoc.Options = {
    definitions: {
        openapis: "3.0.0",
        info: {
            title: "Rest Api"
        },
        components: {
            securitySchemas: {
                bearerAuths: {
                    type: "http",
                    schema: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            }
        ]
    },
    apis: ['./src/routes.ts, ./src/schemas/*.ts']
}