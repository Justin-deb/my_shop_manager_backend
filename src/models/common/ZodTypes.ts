import { ZodType } from "zod";
import { Request } from 'express';

export type RequestSchema = ZodType<{
    body?:unknown;
    query:Request['query'];
    params:Request['params'];
}>

export type CookieSchema = ZodType<{
    params:Request['params'];
    cookies:Request['cookies'];
}>

export type AuthSchema = ZodType<{
    headers:Request['headers'];
    cookies:Request['cookies'];
}>;