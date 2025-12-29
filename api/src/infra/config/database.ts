import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

import { DATABASE_TOKEN } from './constants';
import { DatabaseConfig } from './types';

export const databaseConfig = registerAs(DATABASE_TOKEN, (): DatabaseConfig => ({
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    name: String(process.env.DB_NAME),
}));

export const databaseScheme = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().port().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
});
