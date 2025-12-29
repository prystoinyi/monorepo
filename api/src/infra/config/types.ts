import { API_TOKEN, DATABASE_TOKEN } from './constants';

export type Config = {
    [API_TOKEN]: ApiConfig;
    [DATABASE_TOKEN]: DatabaseConfig;
};

export type ApiConfig = {
    port: number;
};

export type DatabaseConfig = {
    host: string;
    port: number;
    user: string;
    password: string;
    name: string;
};
