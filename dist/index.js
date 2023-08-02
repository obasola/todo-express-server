"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const SimpleLogger_1 = __importDefault(require("./src/misc/SimpleLogger"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connection_1 = __importDefault(require("./db/connection"));
dotenv_1.default.config();
// Create an instance of the Express application
const app = (0, express_1.default)();
// Configure body parser middleware to parse JSON data
app.use(body_parser_1.default.json());
const port = process.env.PORT;
const log = SimpleLogger_1.default.initializeLogging();
app.get("/", (req, res) => {
    res.send(" Express + Typescript server ");
});
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes
//app.use("/api/v1/posts", router);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// Swagger declaration
const swaggerDefinition = {
    openapis: "3.0.0",
    info: {
        title: "Todo Rest Api with TypeScript and MySql",
        version: "1.0.0",
    },
};
const options = {
    swaggerDefinition,
    apis: ["./src/routes/routes.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// start server using: node index.js :
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.sync();
        log.info("DB connection initiated");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
