import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import SimpleLogger from "./src/misc/SimpleLogger";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import bodyParser from "body-parser";
import connection from "./db/connection";
dotenv.config();

// Create an instance of the Express application
const app = express();

// Configure body parser middleware to parse JSON data
app.use(bodyParser.json());

const port = process.env.PORT;
const log = SimpleLogger.initializeLogging();

app.get("/", (req, res) => {
  res.send(" Express + Typescript server ");
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const swaggerSpec = swaggerJsDoc(options);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// start server using: node index.js :
const start = async (): Promise<void> => {
  try {
    await connection.sync();
    log.info("DB connection initiated");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
