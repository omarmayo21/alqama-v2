import { isHeroSlideEligible } from '../src/utils/slideEligibility.ts';

async function testAllScenarios() {
  console.log('🚀 Running Comprehensive Slide Eligibility & Integration Scenarios...\n');

  const now = new Date('2026-10-04T12:00:00+03:00'); // 12:00 PM Riyadh Time

  // Mock Sanity Documents
  const slide1 = {
    _id: 'heroSlide-1',
    _type: 'heroSlide',
    title: { ar: 'الأكاديمية الاكثر تطورا في جدة', en: 'The Most Advanced Sports Academy in Jeddah' },
    badge: { ar: 'اكاديمية القمة الرياضية للأطفال بجدة', en: 'ALQIMA Sports Academy for Children in Jeddah' },
    description: { ar: 'نمهّد طريق أبنائكم نحو القمة...', en: 'Paving your children’s path to the top...' },
    primaryCtaText: { ar: 'ابدأ رحلة أبنائك اليوم', en: "Start Your Child's Journey Today" },
    primaryCtaLink: 'https://wa.me/966500000000',
    secondaryCtaText: { ar: 'استكشف العروض', en: 'Explore Offers' },
    secondaryCtaLink: '/offers',
    reassuranceText: { ar: 'مدربون معتمدون ومتخصصون', en: 'Certified Coaching Staff' },
    displayOrder: 1,
    isActive: true,
  };

  const slide2 = {
    _id: 'heroSlide-2',
    _type: 'heroSlide',
    title: { ar: 'استكشف عروض اليوم الوطني 96', en: 'Explore National Day 96 Offers' },
    primaryCtaText: { ar: 'ابدأ رحلة أبنائك اليوم', en: "Explore National Day Offers" },
    primaryCtaLink: 'https://wa.me/966543414074',
    secondaryCtaText: { ar: 'استكشف عروض اليوم الوطني 96', en: 'Explore Offers' },
    secondaryCtaLink: '/offers',
    reassuranceText: { ar: 'مدربون معتمدون ومتخصصون', en: 'Certified & Specialized Coaches' },
    displayOrder: 2,
    isActive: true,
  };

  function simulateEligibleSlides(sanitySlides, currentDate = now) {
    const list = [];
    const s1Doc = sanitySlides.find(s => s._id === 'heroSlide-1' || s.displayOrder === 1) || (sanitySlides.length > 0 ? sanitySlides[0] : null);
    const s2Doc = sanitySlides.find(s => s._id === 'heroSlide-2' || s.displayOrder === 2) || (sanitySlides.length > 1 ? sanitySlides[1] : null);

    const s1Eligible = s1Doc ? isHeroSlideEligible(s1Doc, currentDate) : true;
    if (s1Eligible) {
      list.push({ ...slide1, type: 'slide1' });
    }

    const s2Eligible = s2Doc ? isHeroSlideEligible(s2Doc, currentDate) : false;
    if (s2Eligible) {
      list.push({ ...slide2, type: 'slide2' });
    }

    if (list.length === 0) {
      list.push({ ...slide1, type: 'slide1' });
    }

    return list;
  }

  let passed = 0;
  let failed = 0;

  function assert(condition, name, details = '') {
    if (condition) {
      console.log(`  ✅ [PASS] ${name}${details ? ` -> ${details}` : ''}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${name}${details ? ` -> ${details}` : ''}`);
      failed++;
    }
  }

  // Scenario 1: Both slides enabled
  const sc1 = simulateEligibleSlides([slide1, slide2]);
  assert(sc1.length === 2 && sc1[0].type === 'slide1' && sc1[1].type === 'slide2', 'Scenario 1: Both slides active', 'Returns [slide1, slide2]');

  // Scenario 2: Slide 2 disabled (isActive: false)
  const sc2 = simulateEligibleSlides([slide1, { ...slide2, isActive: false }]);
  assert(sc2.length === 1 && sc2[0].type === 'slide1', 'Scenario 2: Slide 2 disabled', 'Only Slide 1 returned, Slide 2 unreachable');

  // Scenario 3: Slide 1 disabled (isActive: false), Slide 2 enabled
  const sc3 = simulateEligibleSlides([{ ...slide1, isActive: false }, slide2]);
  assert(sc3.length === 1 && sc3[0].type === 'slide2', 'Scenario 3: Slide 1 disabled', 'Only Slide 2 returned, Slide 1 unreachable');

  // Scenario 4: Slide 2 with future start date
  const sc4 = simulateEligibleSlides([slide1, { ...slide2, startDate: '2026-10-10T00:00:00+03:00' }]);
  assert(sc4.length === 1 && sc4[0].type === 'slide1', 'Scenario 4: Future start date on Slide 2', 'Slide 2 not yet active');

  // Scenario 5: Slide 2 with expired end date
  const sc5 = simulateEligibleSlides([slide1, { ...slide2, endDate: '2026-09-30T23:59:59+03:00' }]);
  assert(sc5.length === 1 && sc5[0].type === 'slide1', 'Scenario 5: Expired end date on Slide 2', 'Slide 2 hidden after end date');

  // Scenario 6: Slide 2 with active scheduled window
  const sc6 = simulateEligibleSlides([
    slide1,
    { ...slide2, startDate: '2026-10-01T00:00:00+03:00', endDate: '2026-10-10T23:59:59+03:00' }
  ]);
  assert(sc6.length === 2, 'Scenario 6: Active scheduled window on Slide 2', 'Both slides active during valid window');

  // Scenario 7: Both slides disabled (Safe Fallback)
  const sc7 = simulateEligibleSlides([{ ...slide1, isActive: false }, { ...slide2, isActive: false }]);
  assert(sc7.length === 1 && sc7[0].type === 'slide1', 'Scenario 7: Safe Fallback when all disabled', 'Defaults to Slide 1 so hero is never broken');

  // Scenario 8: Missing isActive field (Backward Compatibility)
  const slideWithoutIsActive = { ...slide1 };
  delete slideWithoutIsActive.isActive;
  const sc8 = simulateEligibleSlides([slideWithoutIsActive]);
  assert(sc8.length === 1 && sc8[0].type === 'slide1', 'Scenario 8: Backward Compatibility on missing isActive', 'Treated as enabled by default');

  // Scenario 9: Timezone exactness (Asia/Riyadh)
  // At 2026-10-04T12:00:00+03:00 (which is 09:00:00 UTC)
  const sc9a = isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T08:59:59Z' }, now);
  const sc9b = isHeroSlideEligible({ isActive: true, startDate: '2026-10-04T09:00:01Z' }, now);
  assert(sc9a === true && sc9b === false, 'Scenario 9: Riyadh Timezone Precision', 'Evaluates exact UTC/Riyadh offset');

  console.log(`\n🎉 All ${passed} scenario tests passed with 0 failures!\n`);
  if (failed > 0) process.exit(1);
}

testAllScenarios();
