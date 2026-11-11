import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller.js';
import { StagesModule } from './stages/stages.module.js';

// Planned modules (see apps/api/README.md): auth, players, runs, leaderboards.
@Module({
  imports: [StagesModule],
  controllers: [HealthController],
})
export class AppModule {}
