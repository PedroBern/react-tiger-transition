import * as transitions from '../../src/tigers/transitions';

describe('transition', () => {

  Object.keys(transitions).map(key => {

      describe(key, () => {

        test('is function', () => {
          expect(typeof transitions[key]).toBe('function');
        });

        test('return string', () => {
          expect(typeof transitions[key]())
          .toBe('string');
        });

        test('return string containing classNames', () => {

          const style = transitions[key]();

          expect(
            (
              style.indexOf('-enter') > -1 &&
              style.indexOf('-enter-active') > -1
            )
            ||
            (
              style.indexOf('-exit') > -1 &&
              style.indexOf('-exit-active') > -1
            )
          )
          .toBe(true);
        });

      });

  })

});
