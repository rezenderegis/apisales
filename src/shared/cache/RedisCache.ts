import Redis, {Redis as RedisClient} from 'ioredis';
import cacheConfig from '@config/cache';

export default class RedisCache {
    static recover<T>() {
        throw new Error("Method not implemented.");
    }
    private client: RedisClient;

    constructor() {
        this.client = new Redis(cacheConfig.config.redis);

    }

    public async save (key: string, value: any): Promise<void> {

        await this.client.set(key, JSON.stringify(value));

    }

    //We are using generic becouse we dont know what we'll sotre
   
    public async recover<T>(key: string): Promise<T | null> {
        const data = await this.client.get(key);
    
        if (!data) {
          return null;
        }
        
        //JSSON.parse will return to the same format
        const parsedData = JSON.parse(data) as T;
    
        return parsedData;
      }




    public async invalidate(key: string, value: any): Promise<void> {
        
        await this.client.del(key);

    }


}