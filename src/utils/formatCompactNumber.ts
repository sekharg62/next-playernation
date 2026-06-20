/**
 * Formats a number into a compact string (e.g. 40000 → "40k", 1000000 → "1M").
 */
export function formatCompactNumber(count: number): string {
  if (!Number.isFinite(count) || count < 0) {
    return "0";
  }

  if (count >= 1_000_000) {
    return `${formatUnit(count / 1_000_000)}M`;
  }

  if (count >= 1_000) {
    return `${formatUnit(count / 1_000)}k`;
  }

  return String(count);
}

function formatUnit(value: number): string {
  if (Number.isInteger(value)) {
    return String(value);
  }

  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(1).replace(/\.0$/, "");
}
