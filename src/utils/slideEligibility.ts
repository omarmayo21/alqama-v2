import type { SanityHeroSlide } from '../lib/sanity/types';

/**
 * Parses a date or datetime string and normalizes it to UTC epoch milliseconds,
 * explicitly interpreting dates and datetimes without explicit timezone offset
 * as Saudi Arabia Standard Time (Asia/Riyadh, UTC+3).
 *
 * @param dateStr ISO string or date-only string (e.g. "2026-10-04", "2026-10-04T18:00:00Z", "2026-10-04T18:00:00")
 * @param boundary 'start' (00:00:00.000 for date-only) or 'end' (23:59:59.999 for date-only)
 */
export function parseRiyadhTimestamp(dateStr?: string | null, boundary: 'start' | 'end' = 'start'): number | null {
  if (!dateStr || typeof dateStr !== 'string') {
    return null;
  }

  const trimmed = dateStr.trim();
  if (!trimmed) {
    return null;
  }

  try {
    // 1. Date-only format: YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      const timePart = boundary === 'start' ? '00:00:00.000' : '23:59:59.999';
      const isoWithRiyadhOffset = `${trimmed}T${timePart}+03:00`;
      const timeMs = new Date(isoWithRiyadhOffset).getTime();
      return isNaN(timeMs) ? null : timeMs;
    }

    // 2. Datetime without timezone offset (e.g. "2026-10-04T18:00:00" or "2026-10-04T18:00")
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/.test(trimmed)) {
      const isoWithRiyadhOffset = `${trimmed}+03:00`;
      const timeMs = new Date(isoWithRiyadhOffset).getTime();
      return isNaN(timeMs) ? null : timeMs;
    }

    // 3. Full ISO datetime with explicit timezone indicator (e.g. "2026-10-04T15:00:00Z" or "...+03:00")
    const timeMs = new Date(trimmed).getTime();
    return isNaN(timeMs) ? null : timeMs;
  } catch {
    return null;
  }
}

/**
 * Checks whether a hero slide document is active and within its scheduled period.
 *
 * Rules:
 * 1. Missing isActive is treated as enabled (true) for backward compatibility.
 * 2. If isActive is explicitly false, the slide is not eligible.
 * 3. If startDate exists, current time must be >= startDate.
 * 4. If endDate exists, current time must be <= endDate.
 * 5. Timezone evaluated according to Asia/Riyadh (UTC+3).
 */
export function isHeroSlideEligible(
  slide?: Partial<SanityHeroSlide> | null,
  referenceDate: Date = new Date()
): boolean {
  if (!slide) {
    return false;
  }

  // 1. Check isActive toggle (missing / undefined is treated as true)
  if (slide.isActive === false) {
    return false;
  }

  const nowMs = referenceDate.getTime();

  // 2. Check startDate (if defined)
  if (slide.startDate) {
    const startMs = parseRiyadhTimestamp(slide.startDate, 'start');
    if (startMs !== null && nowMs < startMs) {
      return false;
    }
  }

  // 3. Check endDate (if defined)
  if (slide.endDate) {
    const endMs = parseRiyadhTimestamp(slide.endDate, 'end');
    if (endMs !== null && nowMs > endMs) {
      return false;
    }
  }

  return true;
}
