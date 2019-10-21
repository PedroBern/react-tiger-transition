import  { computeClassName } from '../../src/utils';

test('single default className input', () => {
  expect(computeClassName(false, '', 'defaultClassname'))
  .toBe('defaultClassname ');
});

test('default + custom className', () => {
  expect(computeClassName(false, 'custom', 'default'))
  .toBe('default custom');
});

test('default + non function or string custom', () => {
  expect(computeClassName(false, {a: 1}, 'default'))
  .toBe('default');
});

test('default + custom function className', () => {
  expect(computeClassName(false, () => 'custom', 'default'))
  .toBe('default  custom');
});

test('disable default, no custom', () => {
  expect(computeClassName(true, '', 'default'))
  .toBe('');
});

test('disable default, custom function className', () => {
  expect(computeClassName(true, () => 'custom', 'default'))
  .toBe('custom');
});

test('disable default, have custom', () => {
  expect(computeClassName(true, 'custom', 'default'))
  .toBe('custom');
});
