// @/main.ts
import "reflect-metadata";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import SimpleLogger from "./src/misc/SimpleLogger";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

dotenv.config();
import connection from "././db/connection";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.port;
const log = SimpleLogger.initializeLogging();
// ...

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    log.info("DB connection initiated");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

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

const swaggerSpec = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

void start();
