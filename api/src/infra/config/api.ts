import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';

import { API_TOKEN } from './constants';
import { ApiConfig } from './types';

export const apiConfig = registerAs(API_TOKEN, (): ApiConfig => ({
    port: Number(process.env.API_PORT),
}));

export const apiScheme = Joi.object({
    API_PORT: Joi.number().port().required(),
});
