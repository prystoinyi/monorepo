import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

import type { Config } from '../config/types';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
    private pool: Pool;

    constructor(private readonly config: ConfigService<Config, true>) {
        const db = this.config.get('database', { infer: true });

        this.pool = new Pool({
            host: db.host,
            port: db.port,
            user: db.user,
            password: db.password,
            database: db.name,
        });
    }

    async onModuleDestroy() {
        await this.pool.end();
    }

    async ping() {
        await this.pool.query('select 1');
    }
}
