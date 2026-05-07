/**
 * ZAWIOS — Signal Intelligence Module
 */

export function computeDivergenceIndex(yesPercent: number, noPercent: number): number {
  const total = yesPercent + noPercent;
  if (total === 0) return 0;
  const yesFraction = yesPercent / total;
  const distance = Math.abs(yesFraction - 0.5);
  return Math.round((1 - distance / 0.5) * 100);
}

export function getDivergenceLabel(index: number): { label: string; color: string } {
  if (index >= 80) return { label: 'Tension forte', color: '#E5484D' };
  if (index >= 60) return { label: 'Divergence élevée', color: '#F5A524' };
  if (index >= 40) return { label: 'Divergence modérée', color: '#1C39BB' };
  return { label: 'Consensus relatif', color: '#17D5CF' };
}

export function computeAcceleration(recentVotesPerHour: number, averageVotesPerHour: number): { accelerating: boolean; ratio: number } {
  if (averageVotesPerHour === 0) return { accelerating: recentVotesPerHour > 0, ratio: recentVotesPerHour };
  const ratio = recentVotesPerHour / averageVotesPerHour;
  return { accelerating: ratio > 2, ratio: Math.round(ratio * 10) / 10 };
}
