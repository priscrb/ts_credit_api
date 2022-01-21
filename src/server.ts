import express from 'express';
import "./database";
import { routes } from './routes';
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json())

app.use(routes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})