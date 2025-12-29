import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { apiConfig, apiScheme } from './infra/config/api';
import { databaseConfig, databaseScheme } from './infra/config/database';

import { DatabaseModule } from './infra/database/database.module';
import { HealthModule } from './health/health.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [apiConfig, databaseConfig],
            validationSchema: apiScheme.concat(databaseScheme),
        }),
        DatabaseModule,
        HealthModule,
    ],
})
export class AppModule {}
