import type { StageId } from './stages.js';

export type LeaderboardScope = 'global' | 'week' | 'friends';

export interface Player {
  id: string;
  username: string;
  createdAt: string;
}

/** A finished run, sent by the app when the hadeda bonks. */
export interface RunSubmission {
  stageId: StageId;
  score: number;
  grubs: number;
  neighboursWoken: number;
  durationMs: number;
}

export interface LeaderboardEntry {
  rank: number;
  player: Pick<Player, 'id' | 'username'>;
  score: number;
}

export interface Leaderboard {
  stageId: StageId;
  scope: LeaderboardScope;
  entries: LeaderboardEntry[];
  /** The signed-in player's own row, pinned at the bottom of the list. */
  you: LeaderboardEntry | null;
}

/** Weekly boards reset Monday 00:00, Africa/Johannesburg. */
export const WEEKLY_RESET = { weekday: 1, hour: 0, timeZone: 'Africa/Johannesburg' } as const;
