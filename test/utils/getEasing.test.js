import  { getEasing } from '../../src/utils';

const easings = [
  'easeInSine',
  'easeOutSine',
  'easeInOutSine',
  'easeInCubic',
  'easeOutCubic',
  'easeInOutCubic',
  'easeInQuint',
  'easeOutQuint',
  'easeInOutQuint',
  'easeInCirc',
  'easeOutCirc',
  'easeInOutCirc',
  'easeInQuad',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInQuart',
  'easeOutQuart',
  'easeInOutQuart',
  'easeInExpo',
  'easeOutExpo',
  'easeInOutExpo',
  'easeInBack',
  'easeOutBack',
  'easeInOutBack'
];

describe('getEasing', () => {
  easings.map(easing => {
    test(`${easing} is defined`, () => {
      expect(getEasing(easing)).not.toBe(easing);
    });
  })

  test('Default returns input', () => {
    expect(getEasing('easing')).toBe('easing');
  });
})
