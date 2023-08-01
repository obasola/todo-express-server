"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const SimpleLogger_1 = __importDefault(require("./src/misc/SimpleLogger"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 9001; //process.env.port;
const log = SimpleLogger_1.default.initializeLogging();
app.get('/', (req, res) => {
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
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// start server using: node index.js :
