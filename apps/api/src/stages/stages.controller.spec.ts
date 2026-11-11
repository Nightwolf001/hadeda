import { NotFoundException } from '@nestjs/common';
import { StagesController } from './stages.controller.js';

describe('StagesController', () => {
  const controller = new StagesController();

  it('lists the six stages in day order', () => {
    const stages = controller.list();
    expect(stages.map((s) => s.id)).toEqual([
      'bo-kaap',
      'sea-point',
      'table-mountain',
      'southern-suburbs',
      'muizenberg',
      'lions-head',
    ]);
  });

  it('returns one stage by id', () => {
    expect(controller.get('bo-kaap').name).toBe('Bo-Kaap');
  });

  it('throws for an unknown stage', () => {
    expect(() => controller.get('cape-point')).toThrow(NotFoundException);
  });
});
