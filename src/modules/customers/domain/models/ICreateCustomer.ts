import { StringRegexOptions } from "joi";

export interface ICreateCustomer {
    //We create this interface because on the creation is not necesssary id and datas, because are generated automatically. 
    name: string;
    email: string;
    gender: string; 
    security_number: string;
    person_type: string;
}