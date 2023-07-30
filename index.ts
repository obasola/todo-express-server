import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 9001; //process.env.port;


app.get('/', (req,res) => {
    res.send(' Express + Typescript server ');
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})

// start server using: node index.js :

