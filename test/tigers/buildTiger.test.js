import { glide } from '../../src';

describe('buildTiger', () => {

  test('inject styles', () => {
    glide({
      name: 'glide'
    });
    expect(document.querySelector(`[data-meta=glide-enter]`)).not.toBe(null);
    expect(document.querySelector(`[data-meta=glide-exit]`)).not.toBe(null);
  });

});
