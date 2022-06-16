import 'reflect-metadata'; 
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import {errors} from 'celebrate';
import {pagination} from 'typeorm-pagination';
import routes from './routes';
import AppError from '@shared/errors/AppError';

//Já importa e le o arquivo ormconfig
import '@shared/typeorm';
import uploadConfig from '@config/upload';
const app = express();
app.use(cors());

app.use(express.json());

//This is a middleware
app.use(pagination);

//This configuration will allow front end to see the file just ask /files/filename
app.use('/files', express.static(uploadConfig.diretory));

app.use(routes);

app.use(errors());

app.use((error: Error, request: Request, response: Response,next: NextFunction) => {

  //Erros gerados pela nossa aplicação
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(error);


  //Se não foi erro da nossa aplicação vai gerar esse erro
  return response.status(500).json({
      status: 'error',
      message: 'Internal server error',

  });
});

app.listen(3333, () =>{
  console.log('Server started ');
});

