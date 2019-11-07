import  { styleInject } from '../../src/utils';

describe('styleInject', () => {

  test('dont inject style', () => {
    const css = null;
    const name = "test";
    styleInject(css, name);
    expect(document.querySelector(`[data-meta=test]`)).toBe(null);
  });

  test('inject style', () => {
    expect(document.querySelector(`[data-meta=test]`)).toBe(null);
    const css = ".someClass {}";
    const name = "test";
    styleInject(css, name);
    expect(document.querySelector(`[data-meta=test]`)).not.toBe(null);
  });

})
