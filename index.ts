import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = 8000;

const start = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
};
start();
