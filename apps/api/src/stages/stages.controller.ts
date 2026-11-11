import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { STAGES, type Stage } from '@hadeda/shared';

@Controller('stages')
export class StagesController {
  @Get()
  list(): readonly Stage[] {
    return STAGES;
  }

  @Get(':id')
  get(@Param('id') id: string): Stage {
    const stage = STAGES.find((s) => s.id === id);
    if (!stage) throw new NotFoundException(`No stage "${id}"`);
    return stage;
  }
}
