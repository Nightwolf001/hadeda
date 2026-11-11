import { Module } from '@nestjs/common';
import { StagesController } from './stages.controller.js';

@Module({ controllers: [StagesController] })
export class StagesModule {}
