import { Request, Response, NextFunction } from 'express';
import redis from 'redis';
import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import AppError from '@shared/errors/AppError';


export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {


const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASS || undefined,
  });
  
  const limiter = new RateLimiterRedis({
    //redisClient abouve
    storeClient: redisClient,
    keyPrefix: 'ratelimit',
    //points: number request per second
    points: 5,
    //Duration 1 second
    duration: 1,
  });

    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new AppError('Too many requests.', 429);
  }
}