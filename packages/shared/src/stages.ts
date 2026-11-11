export type StageId =
  | 'bo-kaap'
  | 'sea-point'
  | 'table-mountain'
  | 'southern-suburbs'
  | 'muizenberg'
  | 'lions-head';

export type TimeOfDay = 'dawn' | 'morning' | 'midday' | 'afternoon' | 'golden-hour' | 'dusk';

export interface Stage {
  id: StageId;
  number: number;
  name: string;
  timeOfDay: TimeOfDay;
  /** Score needed in the previous stage to unlock this one. `null` = open from the start. */
  unlockScore: number | null;
}

/** One day in Cape Town, roost to roost. Unlock scores are placeholders until tuned. */
export const STAGES: readonly Stage[] = [
  { id: 'bo-kaap', number: 1, name: 'Bo-Kaap', timeOfDay: 'dawn', unlockScore: null },
  { id: 'sea-point', number: 2, name: 'Sea Point Prom', timeOfDay: 'morning', unlockScore: null },
  { id: 'table-mountain', number: 3, name: 'Table Mountain', timeOfDay: 'midday', unlockScore: null },
  { id: 'southern-suburbs', number: 4, name: 'Southern Suburbs', timeOfDay: 'afternoon', unlockScore: null },
  { id: 'muizenberg', number: 5, name: 'Muizenberg', timeOfDay: 'golden-hour', unlockScore: null },
  { id: 'lions-head', number: 6, name: "Lion's Head", timeOfDay: 'dusk', unlockScore: null },
];
