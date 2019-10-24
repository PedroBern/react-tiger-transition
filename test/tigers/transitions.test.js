import * as transitions from '../../src/tigers/transitions';

describe('transition', () => {

  Object.keys(transitions).map(key => {
    if (key.indexOf('Rules') > -1){

      describe(key, () => {

        test('is function', () => {
          expect(typeof transitions[key]).toBe('function');
        });

        test('return object', () => {
          expect(Object.prototype.toString.call({...transitions[key]()}))
          .toBe('[object Object]');
        });

        if (key.indexOf('InRules') > -1) {
          test('return buildTransitionIn', () => {
            expect(transitions[key]().toString())
            .toStrictEqual(transitions.buildTransitionIn().toString());
          });
        }

        else if (key.indexOf('OutRules') > -1) {
          test('return buildTransitionOut', () => {
            expect(transitions[key]().toString())
            .toStrictEqual(transitions.buildTransitionOut().toString());
          });
        }

      });

    }
  })

});
