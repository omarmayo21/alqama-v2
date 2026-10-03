import { isHeroSlideEligible, parseRiyadhTimestamp } from '../src/utils/slideEligibility.ts';

function runTests() {
  console.log('🧪 Running Hero Slide Eligibility Tests...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  ✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${testName}`);
      failed++;
    }
  }

  const baseNow = new Date('2026-10-04T12:00:00+03:00'); // Oct 4, 2026, 12:00 PM Riyadh time

  // 1. Basic isActive checks
  assert(isHeroSlideEligible({ isActive: true }, baseNow) === true, 'isActive: true -> eligible');
  assert(isHeroSlideEligible({ isActive: false }, baseNow) === false, 'isActive: false -> ineligible');
  assert(isHeroSlideEligible({}, baseNow) === true, 'missing isActive (undefined) -> eligible (backward compatibility)');
  assert(isHeroSlideEligible({ isActive: undefined }, baseNow) === true, 'isActive: undefined -> eligible');
  assert(isHeroSlideEligible(null, baseNow) === false, 'null slide -> ineligible');

  // 2. Start Date checks
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-01T00:00:00+03:00' }, baseNow) === true,
    'Past startDate (+03:00) -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-05T00:00:00+03:00' }, baseNow) === false,
    'Future startDate (+03:00) -> ineligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T11:59:59+03:00' }, baseNow) === true,
    'startDate 1 second in the past -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T12:00:01+03:00' }, baseNow) === false,
    'startDate 1 second in the future -> ineligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-04' }, baseNow) === true,
    'Date-only startDate for today (2026-10-04) starts at 00:00 -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-05' }, baseNow) === false,
    'Date-only startDate for tomorrow (2026-10-05) -> ineligible'
  );

  // 3. End Date checks
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-10T00:00:00+03:00' }, baseNow) === true,
    'Future endDate (+03:00) -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-01T00:00:00+03:00' }, baseNow) === false,
    'Past endDate (+03:00) -> ineligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-04T12:00:01+03:00' }, baseNow) === true,
    'endDate 1 second in future -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-04T11:59:59+03:00' }, baseNow) === false,
    'endDate 1 second in past -> ineligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-04' }, baseNow) === true,
    'Date-only endDate for today (2026-10-04) ends at 23:59:59.999 -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, endDate: '2026-10-03' }, baseNow) === false,
    'Date-only endDate for yesterday (2026-10-03) -> ineligible'
  );

  // 4. Combined Start and End Date checks
  assert(
    isHeroSlideEligible(
      { isActive: true, startDate: '2026-10-01T00:00:00Z', endDate: '2026-10-10T00:00:00Z' },
      baseNow
    ) === true,
    'Active window [Oct 1 - Oct 10] -> eligible'
  );
  assert(
    isHeroSlideEligible(
      { isActive: false, startDate: '2026-10-01T00:00:00Z', endDate: '2026-10-10T00:00:00Z' },
      baseNow
    ) === false,
    'Active window but isActive: false -> ineligible'
  );

  // 5. Timezone specific (UTC vs Asia/Riyadh UTC+3)
  // 12:00 PM Riyadh is 09:00 AM UTC
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T08:00:00Z' }, baseNow) === true,
    '08:00 UTC start time (11:00 Riyadh) when now is 12:00 Riyadh -> eligible'
  );
  assert(
    isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T10:00:00Z' }, baseNow) === false,
    '10:00 UTC start time (13:00 Riyadh) when now is 12:00 Riyadh -> ineligible'
  );

  console.log(`\nResults: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
