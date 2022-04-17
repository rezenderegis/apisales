import 'reflect-metadata'; 
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import AppError from '@shared/errors/AppError';

//Já importa e le o arquivo ormconfig
import '@shared/typeorm';

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response,next: NextFunction) => {

  //Erros gerados pela nossa aplicação
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  //Se não foi erro da nossa aplicação vai gerar esse erro
  return response.status(500).json({
      status: 'error',
      message: 'Internal server error',

  });
});

app.listen(3333, () =>{
  console.log('Server started ');
});

