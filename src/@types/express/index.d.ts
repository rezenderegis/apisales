//This namespace is to include a interface request the object user. 
declare namespace Express {
    export interface Request {
        user: {
            id: string;
        }
    }
}