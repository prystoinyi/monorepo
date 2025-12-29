import { Controller, Get } from '@nestjs/common';

import { DatabaseService } from '../infra/database/database.service';

@Controller('healthz')
export class HealthController {
    constructor(private readonly db: DatabaseService) {}

    @Get()
    async health() {
        try {
            await this.db.ping();

            return { status: 'ok' };
        } catch {
            return { status: 'error' };
        }
    }
}
